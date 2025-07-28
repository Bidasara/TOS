// import React from 'react'
// import { useState, useRef, useEffect } from 'react'
// import { useProblemContext } from '../../contexts/ProblemContext'
// import Modal from '../common/Modal'
// import Input from '../common/Input'

// const Tab = () => {
//     const { tabOpen, setTabOpen, currentList, addCategory} = useProblemContext()
//     const [inputVal, setInputVal] = useState("")
//     const inputRef = useRef(null)

//     useEffect(() => {
//         if (tabOpen && inputRef.current) {
//             inputRef.current.focus();
//         }
//     }, [tabOpen]);

//     //Functions
//     function handleChange(e) {
//         setInputVal(e.target.value)
//     }
//     function handleAddTopic() {
//         if(inputVal.trim() && currentList.id)
//         addCategory(currentList.id,inputVal)
//         setInputVal("")
//         setTabOpen(false)
//     }

//     if (!tabOpen) return null
//     return (
//         <Modal
//             isOpen={tabOpen}
//             onClose={() => setTabOpen(false)}
//             onSubmit={handleAddTopic}
//             title="Add New Category"
//         >
//             <Input
//                 label="Category Title"
//                 id="category-title"
//                 value={inputVal}
//                 onChange={handleChange}
//                 placeholder="Enter category title"
//                 fullWidth
//                 autoFocus
//                 onKeyDown={(e) => {
//                     if (e.key === 'Enter')
//                         handleAddTopic();
//                 }}
//             />
//         </Modal>
//     )
// }

// export default Tab