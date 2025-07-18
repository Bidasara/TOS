import React, { useState,useEffect } from 'react'
import { useProblemContext } from '../../contexts/ProblemContext'
import Modal from '../common/Modal'
import Input from '../common/Input'

const ProblemTab = ({ problemTab, setProblemTab, category, setOpenCategory, openCategory, setElevated }) => {
    //Hooks
    const { currentList, addProblem, data } = useProblemContext()
    const [inputVal, setInputVal] = useState("")

    //Functions
    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    const handleAddProblem = () => {
        if (inputVal.trim() && currentList._id && category._id) {
            const isFirstProblem = category.problems.length === 0;
            addProblem(currentList._id, openCategory.title, inputVal)
            setInputVal("");
            setProblemTab(false);
            setOpenCategory(openCategory);
        } else {
            alert("Please enter a valid problem title.");
        }
    }

    useEffect(() => {
      setElevated(data.lists.find(list=>list._id===currentList._id).categories.find(cat=>cat._id===category._id).problems?.[category.problems.length-1]?._id)
    }, [data])
    
    return (
        <Modal
            isOpen={problemTab}
            onClose={() => setProblemTab(false)}
            onSubmit={handleAddProblem}
            title="Add New Problem"
        >
            <Input
                label="Problem Title"
                id="problem-title"
                value={inputVal}
                onChange={handleChange}
                placeholder="Enter problem title"
                fullWidth
                autoFocus
                onKeyDown={(e) => {
                    if (e.key === 'Enter')
                        handleAddProblem();
                }}
            />
        </Modal>
    )
}

export default ProblemTab
