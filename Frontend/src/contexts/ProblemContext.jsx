import { createContext, useContext, useState, useEffect } from 'react';
import api from "../api";
import { useAuth } from './AuthContext';
import { setAccessToken } from '../authToken';
import { useNotification } from './NotificationContext.jsx';

// Create the context
const ProblemContext = createContext();

// Create a provider component
export const ProblemProvider = ({ children }) => {
  const {showNotification} = useNotification();

  // variables for modal
  const [modalOpen, setModalOpen] = useState(false);
  const onModalClose = () => {
    setModalOpen(false);
  }
  const [func, setFunc] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [inputId, setInputId] = useState("2");
  const [inputType, setInputType] = useState("number");
  const [inputPlaceHolder, setInputPlaceHolder] = useState("");
  const [modalExtra, setModalExtra] = useState("");
  function onChange(e) {
    setInputText(e.target.value);
  }
  function onQueryChange(query){
    setInputText(query);
  }

  // ===== AUTHENTICATION =====
  const { accessToken } = useAuth();

  // ===== MAIN DATA STATE =====
  // data: Main data structure containing all user's lists and their categories/problems
  // Structure: { lists: [{ _id, title, categories: [{ _id, title, problems: [{ _id, title, solved, ... }] }] }] }
  const [data, setData] = useState({ lists: [] });
  const [problems, setProblems] = useState([]);

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
  const [totalRevised, setTotalRevised] = useState(0)
  // totalProblems: Total number of problems across all lists
  const [totalProblems, setTotalProblems] = useState(0)
  // elevatedProblem: Stores the _id of the currently elevated problemnote
  const [elevatedProblem, setElevatedProblem] = useState(null);

  // ===== NOTE MODAL STATE =====
  const [noteModalOpen, setNoteModalOpen] = useState(false);
  const [noteModalContent, setNoteModalContent] = useState({});

  // ===== INITIALIZATION EFFECTS =====
  // Fetch recommended lists from backend or localStorage on component mount
  useEffect(() => {
    const fetchAllProblems = async () => {
      const allProblems = localStorage.getItem("allProblems");
      if (allProblems) {
        try {
          setProblems(JSON.parse(allProblems));
          return;
        } catch (err) {
          console.error("Error parsing allProblems data", err);
        }
      } else {
        try {
          const response = await api.get('/data/allProblems');
          setProblems(response.data.data);
          localStorage.setItem("allProblems", JSON.stringify(response.data.data));
        } catch (error) {
          console.error("error fetching all problems", error);
          setProblems([]);
        }
      }
    }
    fetchAllProblems();
  }, [])
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
          const fetchedData = response.data?.data;
          const tots = response.data?.data?.totalProblems;
          setData(fetchedData);
          setTotalProblems(tots);
          setCurrentList(fetchedData.lists[0] || {});
          localStorage.setItem("userData", JSON.stringify(fetchedData));
          localStorage.setItem("TotsProbs", JSON.stringify(tots));
        } catch (error) {
          console.error("Error fetching user data", error);
          setData({ lists: [] });
          setCurrentList({});
        }
      }
    };
    const fetchTotsProbs = async () => {
      const totsProbs = localStorage.getItem("TotsProbs");
      if (totsProbs) {
        try {
          const parsedData = JSON.parse(totsProbs);
          setTotalProblems(parsedData);
          return;
        } catch (err) {
          console.error("Error parsing data", err);
        }
      }
    };
     if (accessToken) {
        fetchData();
        fetchTotsProbs();
    } else {
        setData({ lists: [] });
        setCurrentList({});
        setTotalProblems(0);
    }
  }, [accessToken]);

  // ===== HELPER FUNCTIONS =====
  // getTotalSolved: Calculates total number of solved problems across all lists
  // Returns: number (total count of problems where solved: true)
  const getTotalSolved = () => {
    if (!data || data == {})
      return 0;
    const answer = new Set(data?.lists.flatMap(list =>
      list.categories.flatMap(cat =>
        cat.problems.filter(prob => prob.solved).map(p => p.problemId.num)
      ))).size;
    return answer;
  }
  const getTotalRevised = () => {
    if (!data || data == {})
      return 0;
    const answer = new Set(data?.lists.flatMap(list =>
      list.categories.flatMap(cat =>
        cat.problems.filter(prob => prob.revised).map(p => p.problemId.num)
      ))).size;
    return answer;
  }

  // getAllProblems: Calculates total number of problems
  // Returns: number (total count of all problems)

  // ... inside ProblemProvider
  const resetData = () => {
    setData({ lists: [] });
    setCurrentList({});
    setElevatedCategory(null);
    setOpenCategory(null);
    setTotalSolved(0);
    setTotalProblems(0);
    setAccessToken(null);
    localStorage.removeItem("userData");
  };

  // ===== STATISTICS UPDATE EFFECT =====
  // Update statistics whenever data changes
  useEffect(() => {
    setTotalSolved(getTotalSolved())
    setTotalRevised(getTotalRevised())
  }, [data])

  // ===== CRUD OPERATIONS FOR LISTS =====

  // addToList: Adds a recommended list to user's personal lists
  // Parameters: listId (string) - _id of the list to add
  // Action: Finds list in recomList, adds to data.lists, sets as currentList
  const deleteList = async (listId) => {
    try {
      const response = await api.delete('/data/deleteList', {
        data: {
          listId: listId
        }
      }, {
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
      setOpenCategory(null);
      setElevatedCategory(null);
      // setOpenCategory(null);

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
      const response = await api.delete('/data/deleteCategory', {
        data: {
          listId: listId,
          categoryId: categoryId
        },
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
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
      setOpenCategory(null);
      console.log("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      console.error("Error details:", error.response?.data || error.message);
      throw error; // Re-throw to let the calling component handle it
    }
  };
  const updateProblemRevisedStatus = async (listId, titleCategory, probId) => {
    try {
      const response = await api.patch('/data/markRevised', { listId, titleCategory, probId }, { headers: { Authorization: `Bearer ${accessToken}` } });
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


  const addCategory = async (listId) => {
    setModalOpen(false);
    try {
      const response = await api.patch('/data/addCategory', {
        listId: listId,
        title: inputText
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const newCategory = {
        _id: response.data.data,
        title: inputText,
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
        setOpenCategory(newCategory._id)
        return newData;
      });
    } catch (err) {
      console.log(err)
    }
    setInputText("");
  };

  // ===== CRUD OPERATIONS FOR PROBLEMS =====

  // updateProblemStatus: Marks a problem as solved via API call
  // Parameters: listId, categoryId, problemId (strings), status (boolean)
  // Action: POSTs to backend, updates problem.solved to true in local state

  const deleteProblem = async (listId, categoryId, problemId) => {
    try {
      const response = await api.delete('/data/deleteProblem', {
        data: {
          listId: listId,
          categoryId: categoryId,
          problemId: problemId
        }
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
  const updateProblemStatus = async (listId, categoryId, problemId, note, addToRevise) => {
    try {
      const response = await api.patch('/data/submit', {
        listId: listId,
        catId: categoryId,
        probId: problemId,
        notes: note,
        addToRevise: addToRevise
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
                          ? { ...problem, solved: true, notes: note, revised: addToRevise === false ? true : false, toRevise: addToRevise ? (new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)) : null }
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
  const addProblem = async (data) => {
    const { listId, catId } = data;
    const probNum = parseInt(inputText);
    if (currentList._id === listId) {
      for (const cat of currentList.categories) {
        if (cat._id === catId) {
          for (const prob of cat.problems) {
            if (prob.problemId.num == probNum){
              showNotification('This Problem already exists in current Category','error');
              return;
            }
          }
        }
      }
    }
    setModalOpen(false)
    let newProblem = null;
    try {
      const response = await api.patch('/data/addProblem', {
        listId: listId,
        catId: catId,
        probNum: probNum
      })
      newProblem = {
        problemId: {
          _id: response.data.data.prob._id,
          num: response.data.data.prob.num,
          title: response.data.data.prob.title,
          difficulty: response.data.data.prob.difficulty,
          link: response.data.data.prob.link,
          hint: response.data.data.prob.hint,
          tag: response.data.data.prob.tag
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
                  if (category._id === catId) {
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
      showNotification(`Problem number ${probNum} added successfully`)
      return true;
    } catch (err) {
      console.error("Error adding problem:", err);
    }
  };

  const updateNotes = async (listId,categoryId,problemId,updatedNotes) => {
    try {
      const response = await api.patch('/data/updateNotes', {
        listId: listId,
        catId: categoryId,
        probId: problemId,
        notes: updatedNotes,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
    }
    catch (err) {
      console.error("Error updating problem status:", err);
    }
  };

  // Per-list persistence for openCategory and elevatedProblem
  useEffect(() => {
    if (currentList?._id) {
      if (currentList.categories.find(category => category._id === openCategory))
        setOpenCategory(openCategory);
      else if (currentList.categories.find(category => category._id === localStorage.getItem(`openCategory_${currentList._id}`)))
        setOpenCategory(localStorage.getItem(`openCategory_${currentList._id}`));
    }
  }, [currentList?._id]);

  // ===== CONTEXT VALUE OBJECT =====
  // Contains all state variables and functions to be shared across components
  const value = {
    // Data State
    data,                    // Main data structure with all lists/categories/problems
    setData,                 // Function to update main data structure
    onQueryChange,

    // Current Selection State
    currentList,             // Currently selected list object
    setCurrentList,          // Function to change current list

    // UI State
    elevatedCategory,        // _id of visually elevated category
    setElevatedCategory,     // Function to set elevated category
    openCategory,            // Currently open/expanded category object
    setOpenCategory,         // Function to open/close categories
    elevatedProblem,         // ID of the currently elevated problem
    setElevatedProblem,      // Function to set elevated problem
    resetData,               // Function to reset all data and state
    openNote,
    setOpenNote,             // Function to toggle notes modal

    // Statistics
    totalSolved,             // Total number of solved problems
    setTotalSolved,          // Function to update solved count
    totalProblems,           // Total number of problems
    setTotalProblems,        // Function to update total count
    totalRevised,
    setTotalRevised,
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
    modalOpen,
    setModalOpen,
    onModalClose,
    modalTitle,
    setModalTitle,
    inputText,
    setInputText,
    inputLabel,
    setInputLabel,
    inputId,
    setInputId,
    inputType,
    setInputType,
    inputPlaceHolder,
    setInputPlaceHolder,
    onChange,
    modalExtra,
    setModalExtra,
    setFunc,
    func,
    problems,
    setProblems,
    updateNotes
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