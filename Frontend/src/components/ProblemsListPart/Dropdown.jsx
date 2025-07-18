import { useProblemContext } from '../../contexts/ProblemContext.jsx';
import Scroll from '../common/Scroll.jsx';
import Category from './Category.jsx';

const Dropdown = () => {
    const { 
        currentList, data,setModalOpen,setFunc,setModalTitle,
        setInputText,setInputLabel,setInputId,setInputType,setInputPlaceHolder,setModalExtra,openCategory,setOpenCategory
    } = useProblemContext();

    const handleAdd = () =>{
        setModalTitle("Add Category");
        // setInputText("")
        setFunc("category");
        setInputLabel("Category Title");
        setInputId("Category");
        setInputPlaceHolder("name of your category")
        setInputType("text")
        setModalExtra(currentList._id);
        setModalOpen(true);
    }
    return (
        <>
            <Scroll
                items={data?.lists.find(list => list?._id === currentList?._id)?.categories}
                renderItem={Category}
                height={"h-2/7"}
                openCategory = {openCategory}
                setOpenCategory={setOpenCategory}
            />
            <button onClick={handleAdd} className='w-full h-2/12 rounded-xl text-black bg-amber-300'>
                Add New Category
            </button>
        </>
    );
};

export default Dropdown;