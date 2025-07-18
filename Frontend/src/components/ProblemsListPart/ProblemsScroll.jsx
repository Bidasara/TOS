import { useProblemContext } from '../../contexts/ProblemContext.jsx'
import Problem from './Problem.jsx'
import Scroll from '../common/Scroll.jsx';

const ProblemsScroll = ({openCategory}) => {
    const { currentList, data} = useProblemContext()

    return (
        <div className='w-full h-full flex flex-1 flex-col items-center justify-center'>
            <Scroll
                items={data.lists?.find(list => list._id === currentList._id)?.categories?.find(cat => cat._id === openCategory)?.problems}
                renderItem={Problem}
            />
        </div>
    )
}

export default ProblemsScroll
