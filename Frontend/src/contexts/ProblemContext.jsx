import { createContext, useContext, useState, useEffect } from 'react';
import api from "../api";
import { useAuth } from './AuthContext';

// Create the context
const ProblemContext = createContext();

// Create a provider component
export const ProblemProvider = ({ children }) => {
  // ===== AUTHENTICATION =====
  const { accessToken } = useAuth();

  // ===== MAIN DATA STATE =====
  // data: Main data structure containing all user's lists and their categories/problems
  // Structure: { lists: [{ _id, title, categories: [{ _id, title, problems: [{ _id, title, solved, ... }] }] }] }
  const [data, setData] = useState({ lists: [] });

  // recomList: Array of recommended lists from admin/backend
  // These are pre-made lists that users can add to their personal lists
  const [recomList, setRecomList] = useState([]);

  // ===== CURRENT SELECTION STATE =====
  // currentList: Currently selected/active list object
  // This is the list that the user is currently viewing and working with
  const [currentList, setCurrentList] = useState(data?.lists[0] || {});

  // ===== UI STATE =====
  // elevatedCategory: Stores the _id of the category that should be visually elevated/highlighted
  const [elevatedCategory, setElevatedCategory] = useState(null)
  const [openNote, setOpenNote] = useState(false);

  // openCategory: Stores the currently open/expanded category object
  // When a category is clicked, it becomes the openCategory and shows its problems
  const [openCategory, setOpenCategory] = useState(null)

  // ===== STATISTICS STATE =====
  // totalSolved: Total number of problems marked as solved across all lists
  const [totalSolved, setTotalSolved] = useState(0)
  // totalProblems: Total number of problems across all lists
  const [totalProblems, setTotalProblems] = useState(0)
  const [elevatedProblem, setElevatedProblem] = useState(openCategory?.problems[0]?._id)

  // ===== NOTE MODAL STATE =====
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [noteModalContent, setNoteModalContent] = useState({});

  // ===== INITIALIZATION EFFECTS =====
  // Fetch recommended lists from backend or localStorage on component mount
  useEffect(() => {
    const fetchRecomLists = async () => {
      const storedData = localStorage.getItem("recomLists");
      if (storedData) {
        try {
          setRecomList(JSON.parse(storedData));
          return;
        } catch (err) {
          console.error("Error parsing data", err);
        }
      } else {
        try {
          const response = await api.get('/data/recomLists');
          setRecomList(response.data.data);
          localStorage.setItem("recomLists", JSON.stringify(response.data.data));
        } catch (error) {
          console.error("Error fetching recommended lists", error);
          setRecomList([]);
        }
      }
    };
    fetchRecomLists();
  }, []);

  // Fetch user's data from backend or localStorage on component mount
  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setData(parsedData);
          setCurrentList(parsedData.lists[0] || {});
          return;
        } catch (err) {
          console.error("Error parsing data", err);
        }
      } else {
        try {
          const response = await api.get('/data/getAllLists', {
            headers: { Authorization: `Bearer ${accessToken}` }
          });
          console.log("Fetched user data:", response.data);
          const fetchedData = response.data?.data;
          setData(fetchedData);
          setCurrentList(fetchedData.lists[0] || {});
          localStorage.setItem("userData", JSON.stringify(fetchedData));
        } catch (error) {
          console.error("Error fetching user data", error);
          setData({ lists: [] });
          setCurrentList({});
        }
      }
    };
    fetchData();
  }, [accessToken]);

  useEffect(() => {
    const handleLogout = () => resetData();
    window.addEventListener("user-logged-out", handleLogout);
    return () => window.removeEventListener("user-logged-out", handleLogout);
  }, []);

  // ===== HELPER FUNCTIONS =====
  // getTotalSolved: Calculates total number of solved problems across all lists
  // Returns: number (total count of problems where solved: true)
  const getTotalSolved = () => {
    if (!data || data == {})
      return 0;
    return data?.lists.reduce((listAcc, list) => {
      return listAcc + list?.categories.reduce((catAcc, category) => {
        return catAcc + category?.problems.filter(problem => problem.solved).length;
      }, 0)
    }, 0)
  }

  // getAllProblems: Calculates total number of problems across all lists
  // Returns: number (total count of all problems)
  const getAllProblems = () => {
    if (!data || data == {})
      return 0;
    return data?.lists.reduce((listAcc, list) => {
      return listAcc + list?.categories.reduce((catAcc, category) => {
        return catAcc + category?.problems.length;
      }, 0)
    }, 0)
  }

  // ... inside ProblemProvider
  const resetData = () => {
    setData({ lists: [] });
    setCurrentList({});
    setElevatedCategory(null);
    setOpenCategory(null);
    setTotalSolved(0);
    setTotalProblems(0);
    localStorage.removeItem("userData");
  };

  // ===== STATISTICS UPDATE EFFECT =====
  // Update statistics whenever data changes
  useEffect(() => {
    setTotalProblems(getAllProblems())
    setTotalSolved(getTotalSolved())
  }, [data])

  // ===== CRUD OPERATIONS FOR LISTS =====

  // addToList: Adds a recommended list to user's personal lists
  // Parameters: listId (string) - _id of the list to add
  // Action: Finds list in recomList, adds to data.lists, sets as currentList
  const deleteList = async (listId) => {
    try {
      const response = await api.delete('/data/deleteList', {listId: listId},{
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      console.log("Deleted List:", response.data);
      setData(prevData => ({
        ...prevData,
        lists: prevData.lists.filter(list => list._id !== listId)
      }));
      localStorage.setItem("userData", JSON.stringify({ ...data, lists: data.lists.filter(list => list._id !== listId) }));
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  };
  const addToList = async (listId) => {
    const newList = recomList.find(list => list._id === listId);
    if (!newList) {
      console.error("Recommended list not found");
      return;
    }
    else
      console.log("Found recomlist")
    if (data?.lists?.find(list => list._id === listId)) {
      console.log("List already exists in user's lists");
      return;
    }
    else
      console.log("ALready not present")

    try {
      const response = await api.post('/data/addRecomList', {
        listId: listId
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Use the list returned from the backend
      const createdList = response.data.data.list;
      console.log("Created List:", createdList);

      // Only update state if API call was successful
      setData(prevData => ({
        ...prevData,
        lists: [...prevData.lists, createdList]
      }));

      setCurrentList(createdList);
      setElevatedCategory(null);
      setOpenCategory(null);

      // Update localStorage with new data
      const updatedData = { ...data, lists: [...data.lists, createdList] };
      localStorage.setItem("userData", JSON.stringify(updatedData));

      console.log("Successfully added recommended list");
    } catch (error) {
      console.error("Error adding recommended list:", error);
      // Don't update state if API call failed
    }
  };

  // addEmptyList: Creates a new empty list via API call
  // Parameters: title (string) - title of the new list
  // Action: POSTs to backend, adds new list to data.lists, sets as currentList
  const addEmptyList = async (title) => {
    try {
      const response = await api.post('/data/addList', { title: title }, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      const newList = response?.data?.data?.list;
      setData(prevData => ({
        ...prevData,
        lists: [...prevData?.lists, newList]
      }));
      localStorage.setItem("userData", JSON.stringify({ ...data, lists: [...data.lists, newList] }));
      setCurrentList(newList);
      setElevatedCategory(null);
    } catch (error) {
      console.error(error);
    }
  }

  // ===== CRUD OPERATIONS FOR CATEGORIES =====

  // addCategory: Creates a new category in a list via API call
  // Parameters: listId (string), categoryTitle (string)
  // Action: POSTs to backend, updates the specific list with new category

  const deleteCategory = async (listId, categoryId) => {
    try {
      console.log("deleteCategory called with:", { listId, categoryId });
      const response = await api.delete('/data/deleteCategory', {
        data: {
          listId: listId,
          categoryId: categoryId
        },
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }); 
      console.log("Response from deleteCategory:", response);
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list =>
            list._id === listId
              ? {
                ...list,
                categories: list.categories.filter(category => category._id !== categoryId)
              }
              : list
          )
        };
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
      console.log("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      console.error("Error details:", error.response?.data || error.message);
      throw error; // Re-throw to let the calling component handle it
    }
  };
  const updateProblemRevisedStatus = async (listId, titleCategory, probId) => {
    try {
      console.log("updateProblemRevisedStatus called with:", { listId, titleCategory, probId });
      const response = await api.patch('/data/markRevised', { listId, titleCategory, probId }, { headers: { Authorization: `Bearer ${accessToken}` } });
      console.log("Response from markRevised:", response);
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list =>
            list._id === listId
              ? {
                ...list,
                categories: list.categories.map(category =>
                  category.title === titleCategory
                    ? {
                      ...category,
                      problems: category.problems.map(problem =>
                        problem._id === probId
                          ? { ...problem, revised: true }
                          : problem
                      )
                    }
                    : category
                )
              }
              : list
          )
        };
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
      // Update localStorage with new data
      console.log("Problem revised status updated successfully");
    } catch (error) {
      console.error("Error updating problem revised status:", error);
    }
  }

  const addCategory = async (listId, titleCategory) => {
    try {
      console.log("addCategory called with:", { listId, titleCategory });
      const response = await api.patch('/data/addCategory', {
        listId: listId,
        title: titleCategory
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log("Response from addCategory:", response);
      const newCategory = {
        _id: response.data.data,
        title: titleCategory,
        problems: []
      }
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list =>
            list._id === listId
              ? {
                ...list,
                categories: [...list.categories, newCategory]
              }
              : list
          )
        };
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
    } catch (err) {
      console.log(err)
    }
  };

  // ===== CRUD OPERATIONS FOR PROBLEMS =====

  // updateProblemStatus: Marks a problem as solved via API call
  // Parameters: listId, categoryId, problemId (strings), status (boolean)
  // Action: POSTs to backend, updates problem.solved to true in local state

  const deleteProblem = async (listId, categoryId, problemId) => {
    try {
      console.log("deleteProblem called with:", { listId, categoryId, problemId });
      const response = await api.delete('/data/deleteProblem', {
        listId: listId,
        categoryId: categoryId,
        problemId: problemId
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log("Response from deleteProblem:", response);
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list =>
            list._id === listId
              ? {
                ...list,
                categories: list.categories.map(category =>
                  category._id === categoryId
                    ? {
                      ...category,
                      problems: category.problems.filter(problem => problem._id !== problemId)
                    }
                    : category
                )
              }
              : list
          )
        };
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
      console.log("Problem deleted successfully");
    } catch (error) {
      console.error("Error deleting problem:", error);
    }
  };
  const updateProblemStatus = async (listId, categoryId, problemId, note) => {
    try {
      const response = await api.patch('/data/submit', {
        listId: listId,
        catId: categoryId,
        probId: problemId,
        notes: note
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list =>
            list._id === listId
              ? {
                ...list,
                categories: list.categories.map(category =>
                  category._id === categoryId
                    ? {
                      ...category,
                      problems: category.problems.map(problem =>
                        problem._id === problemId
                          ? { ...problem, solved: true, notes: note }
                          : problem
                      )
                    }
                    : category
                )
              }
              : list
          )
        }
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
    }
    catch (err) {
      console.error("Error updating problem status:", err);
    }
  };

  // addProblem: Adds a new problem to a category (local state only)
  // Parameters: listId, categoryId (strings), problemTitle (string), difficulty (string, default: 'Medium')
  // Action: Adds new problem to local state, doesn't persist to backend
  const addProblem = async (listId, catTitle, problemTitle, difficulty = 'Medium') => {
    let newProblem = null;
    try {
      const response = await api.patch('/data/addProblem', {
        listId: listId,
        titleCategory: catTitle,
        probNum: problemTitle
      })
      newProblem = {
        problemId: {
          _id: response.data.data.prob._id,
          num: response.data.data.prob.num,
          title: response.data.data.prob.title,
          difficulty: response.data.data.prob.difficulty,
          link: response.data.data.prob.link
        },
        _id: response.data.data.p_id,
        solved: false,
        revised: false,
        notes: ""
      };
      setData(prevData => {
        const newData = {
          ...prevData,
          lists: prevData.lists.map(list => {
            if (list._id === listId) {
              return {
                ...list,
                categories: list.categories.map(category => {
                  if (category.title === catTitle) {
                    return {
                      ...category,
                      problems: [...category.problems, newProblem],
                    };
                  }
                  return category;
                }),
                updatedAt: Date.now()
              };
            }
            return list;
          })
        };
        // Update localStorage here
        localStorage.setItem("userData", JSON.stringify(newData));
        return newData;
      });
      setElevatedProblem(newProblem._id);
      return true;
    } catch (err) {
      console.error("Error adding problem:", err);
    }
  };

  // ===== CONTEXT VALUE OBJECT =====
  // Contains all state variables and functions to be shared across components
  const value = {
    // Data State
    data,                    // Main data structure with all lists/categories/problems
    setData,                 // Function to update main data structure

    // Current Selection State
    currentList,             // Currently selected list object
    setCurrentList,          // Function to change current list

    // UI State
    elevatedCategory,        // _id of visually elevated category
    setElevatedCategory,     // Function to set elevated category
    openCategory,            // Currently open/expanded category object
    setOpenCategory,         // Function to open/close categories
    resetData,               // Function to reset all data and state
    elevatedProblem,         // ID of the currently elevated problem
    setElevatedProblem,      // Function to set elevated problem
    openNote,
    setOpenNote,             // Function to toggle notes modal

    // Statistics
    totalSolved,             // Total number of solved problems
    setTotalSolved,          // Function to update solved count
    totalProblems,           // Total number of problems
    setTotalProblems,        // Function to update total count

    // CRUD Functions
    deleteList,              // Delete a list by ID
    deleteCategory,         // Delete a category from a list
    deleteProblem,          // Delete a problem from a category
    updateProblemStatus,     // Mark problem as solved
    addCategory,             // Add new category to list
    addProblem,              // Add new problem to category
    addToList,               // Add recommended list to user lists
    addEmptyList,            // Create new empty list
    updateProblemRevisedStatus, // Update problem's revised status

    // Recommended Lists
    recomList,               // Array of admin-created recommended lists

    // Note Modal
    noteModalOpen,
    setNoteModalOpen,
    noteModalContent,
    setNoteModalContent,
  };

  return (
    <ProblemContext.Provider value={value}>
      {children}
    </ProblemContext.Provider>
  );
};

// ===== CUSTOM HOOK =====
// Custom hook for using the context
// Returns all state variables and functions from ProblemContext
// Throws error if used outside of ProblemProvider
export const useProblemContext = () => {
  const context = useContext(ProblemContext);
  if (context === undefined) {
    throw new Error('useProblemContext must be used within a ProblemProvider');
  }
  return context;
};