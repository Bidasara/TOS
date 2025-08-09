import { List } from "../models/list.model.js";
import { Problem } from "../models/problem.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import mongoose from 'mongoose';

export const getAllListsByUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');
    const lists = await List.find({ owner: userId }).populate('categories.problems.problemId', 'num title difficulty tag hint link');
    if (!lists || lists.length === 0) {
        throw new ApiError(404, 'No lists found for this user');
    }
    const totsProbs = await Problem.find();
    console.log("totalProblems:",totsProbs.length);
    return res.status(200).json(new ApiResponse(200, { lists: lists, totalProblems: totsProbs.length }, 'Lists retrieved successfully'));
})

export const addListForUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');

    const list = new List({
        ...req.body.list,
        owner: userId,
        title: req.body.title,
    });

    await list.save();

    return res.status(201).json(new ApiResponse(201, { list }, 'List created successfully'));
})

export const deleteList = asyncHandler(async (req,res)=> {
    const userId = req.user.id;
    if(!userId) throw new ApiError(400, 'User not logged in');

    const list = await List.findById(req.body.listId);
    if(!list.byAdmin && list.owner.toString() !== userId)
    throw new ApiError(404,'Unauthorized to delete this list');
    
    await List.deleteOne({_id:req.body.listId});
    return res.status(200).json(new ApiResponse(200,'List deleted successfully'));
})

export const addCategoryForList = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');
    const { listId, title } = req.body;
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!title || title == "") throw new ApiError(400, 'Title is required');
 
    const list = await List.findById(listId);
    if (!list) {
        throw new ApiError(404, 'List not found');
    }
    if (list.byAdmin) {
        throw new ApiError(400, 'You are not authorized to add a category to this list');
    }

    const list1 = await List.findByIdAndUpdate(listId,
        {
            $push: {
                categories: {
                    title: title,
                    problems: [],
                }
            }
        },
        { new: true, runValidators: true }
    )

    const category = list1.categories.find(cat => cat.title === title);

    return res.status(200).json(new ApiResponse(200, category._id, 'Category Added Successfully'));
})

export const deleteCategory = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId)
        throw new ApiError(400, 'User not logged in');
    const { listId, categoryId } = req.body;
    if (!listId || !categoryId)
        throw new ApiError(400, 'Need both listId and categoryId');

    const list = await List.findById(listId);
    if (!list)
        throw new ApiError(404, 'List not found');
    if (!list.byAdmin && list.owner != userId)
        throw new ApiError(403, 'Unauthorized to delete category');
    
    const category = list.categories.find(cat => cat._id.toString() === categoryId);
    if (!category)
        throw new ApiError(404, 'Category not found');

    // Remove the category from the categories array
    list.categories = list.categories.filter(cat => cat._id.toString() !== categoryId);
    await list.save();
    
    return res.status(200).json(new ApiResponse(200, 'Category deleted successfully'));
})

export const addProblemForCategory = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');

    const { listId, catId, probNum } = req.body;
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!catId) throw new ApiError(400, 'Invalid Category');
    if (!probNum) throw new ApiError(400, 'Invalid Problem number');

    const prob = await Problem.findOne({ num: probNum }).populate('title num difficulty link tag hint');
    if (!prob) throw new ApiError(404, 'Problem not found with this number');

    // Generate a new ObjectId for the problem entry
    const newProblemId = new mongoose.Types.ObjectId();

    // Find the list AND the specific category within it, and push the new problem with generated _id
    const list = await List.findOneAndUpdate(
        {
            _id: listId,
            "categories._id": catId
        },
        {
            $push: {
                "categories.$.problems": { _id: newProblemId, problemId: prob._id } // Only push the reference with generated _id
            }
        },
        { new: true, runValidators: false }
    );

    if (!list) {
        throw new ApiError(404, 'List or Category not found for adding problem.');
    }

    return res.status(200).json(new ApiResponse(200, {
        prob,
        p_id: newProblemId
    }, 'Problem added successfully to specific category.'));
});

export const deleteProblem = asyncHandler( async (req,res)=> {
    const userId = req.user.id;
    if(!userId) throw new ApiError(400, 'User not logged in');
    const {listId, categoryId, problemId} = req.body;
    console.log('2',listId);
    if(!listId) throw new ApiError(400, 'Invalid List');
    if(!categoryId) throw new ApiError(400, 'Invalid Category');
    if(!problemId) throw new ApiError(400, 'Invalid Problem id');
    console.log('3');

    const list = await List.findById(listId);
    console.log('4');
    if(!list) throw new ApiError(404, 'List not found');
    if(!list.byAdmin && list.owner != userId) throw new ApiError(404, 'Unauthorized to delete problem');

    const category = list.categories.id(categoryId);
    console.log('5');
    if(!category) throw new ApiError(404, 'Category not found');

    category.problems = category.problems.filter(prob=> prob._id != problemId)
    console.log('6');

    console.log('7');
    await list.save();
    console.log('8');
    return res.status(200).json(new ApiResponse(200, 'Problem deleted successfully'));
})

export const markRevisedProblem = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { listId, titleCategory, probId } = req.body;

    if (!userId) throw new ApiError(400, 'User not logged in');
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!titleCategory) throw new ApiError(400, 'Invalid Category');
    if (!probId) throw new ApiError(400, 'Invalid Problem id');


    const list = await List.findById(listId);
    if (!list) throw new ApiError(404, 'List not found');
    const category = list.categories.find(cat => cat.title === titleCategory);
    if (!category) throw new ApiError(404, 'Category not found');

    const problem = category.problems.find(prob => prob._id.toString() === probId);
    if (!problem) throw new ApiError(404, 'Problem not found');
    problem.revised = true;
    await list.save();

    return res.status(200).json(new ApiResponse(200, `Revised problem ${probId}`));
})

export const getNotesByUserListCategoryProblem = asyncHandler(async (req, res) => {
    const { userId, listId, titleCategory, probNum } = req.body;

    if (!userId) throw new ApiError(400, 'User not logged in');
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!titleCategory) throw new ApiError(400, 'Invalid Category');
    if (!probNum) throw new ApiError(400, 'Invalid Problem number');

    const probId = Problem.findOne({ num: probNum }).select('_id').toString();

    const list = await List.findById(listId);
    if (!list) throw new ApiError(404, 'List not found');

    const category = list.categories.find(cat => cat.title === titleCategory);
    if (!category) throw new ApiError(404, 'Category not found');

    const problem = category.problems.find(prob => prob._id.toString() === probId);

    const notes = problem.notes;
    return res.status(200).json(new ApiResponse(200, notes, "Retrieved notes successfully"));
})

const markSolvedWithNotes = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const { listId, catId, probId, notes, addToRevise } = req.body;

    if (!userId) throw new ApiError(400, 'User not logged in');
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!catId) throw new ApiError(400, 'Invalid Category');
    if (!probId) throw new ApiError(400, 'Invalid Problem number');

    const list = await List.findById(listId);
    if (!list) throw new ApiError(404, 'List not found');

    const category = list.categories.find(cat => cat._id.toString() === catId);
    if (!category) throw new ApiError(404, 'Category not found');

    const problem = category.problems.find(prob => prob._id.toString() === probId);
    if (!problem) throw new ApiError(404, 'Problem not found');

    problem.solved = true;
    problem.notes = notes;
    const shouldRevise = addToRevise === true || addToRevise === 'true';
    if (shouldRevise) {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 4);
        problem.toRevise = currentDate;
        problem.revised = false;
    } else {
        problem.toRevise = null;
        problem.revised = true;
    }
    await list.save();

    return res.status(200).json(new ApiResponse(200, `Problem ${probId} marked as solved with notes`));
})

const getRecommendedLists = asyncHandler(async (req, res) => {
    try {
        const recomLists = await List.find({ byAdmin: true })
            .populate('categories.problems.problemId', 'num title difficulty tag hint link');
        return res.status(200).json(new ApiResponse(200, recomLists, "Retrieved recommended lists successfully"));
    } catch (err) {
        console.error('Error fetching recommended lists:', err);
        throw new ApiError(500, 'Failed to retrieve recommended lists');
    }
});

const getReviseListByUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');
    const lists = await List.find({ owner: userId }).populate('categories.problems.problemId', 'num title difficulty tag hint link');
    if (!lists || lists.length === 0) throw new ApiError(400, 'No Data found');

    // Group problems to revise by list
    const result = lists.map(list => {
        const problems = [];
        list.categories.forEach(cat => {
            cat.problems.forEach(prob => {
                if (prob && prob.solved && !prob.revised && prob.toRevise != null) {
                    problems.push({
                        ...prob.toObject(),
                        categoryId: cat._id,
                        categoryTitle: cat.title
                    });
                }
            });
        });
        return {
            listId: list._id,
            listTitle: list.title,
            problems
        };
    }).filter(list => list.problems.length > 0); // Only include lists with problems to revise

    return res.status(200).json(new ApiResponse(200, result, 'Problems to be revised sent successfully'));
});

const addRecomListForUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    if (!userId) throw new ApiError(400, 'User not logged in');
    const { listId } = req.body;
    if (!listId) throw new ApiError(400, 'List ID is required');

    // Find the recommended list
    const list = await List.findOne({ _id: listId, byAdmin: true }).populate('categories.problems.problemId', 'num title difficulty tag hint link');
    if (!list) throw new ApiError(404, 'Recommended list not found');

    // Check if user already has a list with the same title
    const existingList = await List.findOne({ owner: userId, title: list.title });
    if (existingList) throw new ApiError(400, 'You already have this list');

    // Deep clone and remove all _id fields
    const listObj = list.toObject();
    delete listObj._id;
    listObj.owner = userId;
    listObj.byAdmin = false;

    // Remove _id from categories and problems, and ensure problemId is always ObjectId
    if (Array.isArray(listObj.categories)) {
        listObj.categories = listObj.categories.map(cat => {
            const catCopy = { ...cat };
            delete catCopy._id;
            if (Array.isArray(catCopy.problems)) {
                catCopy.problems = catCopy.problems.map(prob => {
                    const probCopy = { ...prob };
                    delete probCopy._id;
                    // Ensure problemId is always ObjectId
                    if (probCopy.problemId && typeof probCopy.problemId === 'object' && probCopy.problemId._id) {
                        probCopy.problemId = probCopy.problemId._id;
                    }
                    return probCopy;
                });
            }
            // Validation: Ensure category title exists
            if (!catCopy.title) {
                throw new ApiError(500, `A category is missing the required title field.`);
            }
            return catCopy;
        });
    }

    // Log the object to be saved for debugging
    console.log('About to save new list:', JSON.stringify(listObj, null, 2));

    // Create and save the new list, with error handling
    try {
        const newList = await new List(listObj).save();
        // Populate before returning
        const populatedList = await List.findById(newList._id).populate('categories.problems.problemId', 'num title difficulty tag hint link');
        return res.status(201).json(new ApiResponse(201, { list: populatedList }, 'Added recommended list successfully'));
    } catch (err) {
        console.error('Error saving new list:', err);
        return res.status(500).json(new ApiResponse(500, null, `Failed to add recommended list: ${err.message}`));
    }
});

const getAllProblems = asyncHandler(async (req,res)=> {
    const problems = await Problem.find();
    if(!problems)
        throw new ApiError(404,"No problems found");
    return res.status(200).json(new ApiResponse(200,problems,'Successfully sent all problems'));
})

const updateNotes = asyncHandler(async (req,res)=>{
    const userId = req.user.id;
    const {listId,catId,probId,notes} = req.body;

    if (!userId) throw new ApiError(400, 'User not logged in');
    if (!listId) throw new ApiError(400, 'Invalid List');
    if (!catId) throw new ApiError(400, 'Invalid Category');
    if (!probId) throw new ApiError(400, 'Invalid Problem number');

    const list = await List.findById(listId);
    if (!list) throw new ApiError(404, 'List not found');

    const category = list.categories.find(cat => cat._id.toString() === catId);
    if (!category) throw new ApiError(404, 'Category not found');

    const problem = category.problems.find(prob => prob._id.toString() === probId);
    if (!problem) throw new ApiError(404, 'Problem not found');

    problem.notes = notes;
    await list.save();
    return res.status(200).json(new ApiResponse(200,`Problem id: ${probId}, notes updated`));
})

export default {
    getNotesByUserListCategoryProblem,
    markRevisedProblem,
    addProblemForCategory,
    addCategoryForList,
    getAllListsByUserId,
    addListForUserId,
    getRecommendedLists,
    markSolvedWithNotes,
    addRecomListForUserId,
    deleteCategory,
    deleteList,
    deleteProblem,
    getReviseListByUserId,
    getAllProblems,
    updateNotes
}