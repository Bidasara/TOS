import { useState,useEffect,useRef } from 'react'
import Scrollbar from './ProblemsListPart/Scrollbar'
import Dropdown from './ProblemsListPart/Dropdown'
import Modal from './common/Modal'
import Input from './common/Input'
import { useProblemContext } from '../contexts/ProblemContext'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import api from '../api'

const Dolist = () => {
    const { addCategory, currentList, setElevatedCategory } = useProblemContext()
    const [tabOpen, setTabOpen] = useState(false)
    const [inputVal, setInputVal] = useState("");
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const listRefs = useRef({});

    const [viewMode, setViewMode] = useState('lists'); // 'lists' or 'toRevise'
    const [reviseData, setReviseData] = useState([]);
    const [selectedReviseList, setSelectedReviseList] = useState(null);
    const { accessToken } = useAuth();

    const fetchReviseData = async () => {
        if (!accessToken) return;
        try {
            const response = await api.get('data/reviseList', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            setReviseData(response.data.data || []);
            setSelectedReviseList(null); // Reset selection on fetch
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (viewMode === 'toRevise' && accessToken) {
            fetchReviseData();
        }
    }, [viewMode, accessToken]);

    return (
        <div className={`flex-1 flex flex-col gap-4 my-2 rounded-xl p-5 overflow-hidden shadow-lg transition-all duration-300 ${theme === 'cyberpunk' ? 'cyberpunk-bg neon-text border-2 border-pink-500' : 'bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700'}`}>
            <div className="flex gap-2 mb-4">
                <button
                    className={`px-4 py-2 rounded ${viewMode === 'lists' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('lists')}
                >Lists</button>
                <button
                    className={`px-4 py-2 rounded ${viewMode === 'toRevise' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setViewMode('toRevise')}
                >To Revise</button>
            </div>
            {viewMode === 'lists' && (
                <>
                    <Scrollbar />
                    <div className="flex-1 overflow-hidden">
                        <Dropdown />
                    </div>
                    <button
                        type='button'
                        className={`mt-2 text-base font-medium py-2.5 w-full rounded-lg flex items-center justify-center gap-2 transition-colors duration-200
                    ${theme === 'cyberpunk' ? 'bg-pink-500 text-cyan-400 neon-text border-2 border-cyan-400 hover:bg-pink-700' : 'bg-transparent border border-dashed border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-900/30'}`}
                        onClick={() => setTabOpen(!tabOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add New Topic
                    </button>
                </>
            )}
            {viewMode === 'toRevise' && (
                <div>
                    <div ref = {containerRef} className="flex gap-2 overflow-x-auto mb-4">
                        {reviseData.map(list => (
                            <button
                                key={list.listId}
                                ref={el => listRefs.current[list.listId] = el}
                                className={`px-3 py-2 rounded ${selectedReviseList?.listId === list.listId ? 'bg-blue-400 text-white' : 'bg-gray-100'}`}
                                onClick={() => setSelectedReviseList(list)}
                            >
                                {list.listTitle}
                            </button>
                        ))}
                    </div>
                    {selectedReviseList ? (
                        <div className="flex flex-col gap-2">
                            {selectedReviseList.problems.length === 0 ? (
                                <div className="text-gray-500">No problems to revise in this list!</div>
                            ) : (
                                selectedReviseList.problems.map(prob => (
                                    <div key={prob._id} className="p-3 bg-white rounded shadow flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <div className="font-semibold">{prob.problemId?.title || 'Untitled Problem'}</div>
                                            <div className="text-xs text-gray-500">
                                                #{prob.problemId?.num} | {prob.problemId?.difficulty} | {prob.categoryTitle}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <button
                                                // onClick={() => handleMarkRevised(prob)}
                                                className="text-xs px-2 py-1 rounded bg-green-100 text-green-800"
                                            >
                                                Mark Revised
                                            </button>
                                            {prob.problemId?.link && (
                                                <a
                                                    href={prob.problemId.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline text-xs"
                                                >
                                                    View
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div className="text-gray-400">Select a list to see problems to revise.</div>
                    )}
                </div>
            )}
            {tabOpen && (
                <Modal
                    isOpen={tabOpen}
                    onClose={() => setTabOpen(false)}
                    onSubmit={() => {
                        addCategory(currentList?._id, inputVal);
                        setInputVal("");
                        setTabOpen(false)
                        setElevatedCategory(currentList.categories?.length - 1)
                    }}
                    title="Add New Category"
                >
                    <Input
                        label="Category Title"
                        id="category-title"
                        value={inputVal}
                        onChange={(e) => { setInputVal(e.target.value) }}
                        placeholder="Enter category title"
                        autoFocus={true}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addCategory(currentList._id, inputVal);
                                setInputVal("");
                                setTabOpen(false);
                            }
                        }}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Dolist
