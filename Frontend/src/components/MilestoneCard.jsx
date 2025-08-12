import React from 'react';
import api from '../api';
import { useNotification } from '../contexts/NotificationContext';
// A simple helper function to get the right icon based on the status
const getStatusIcon = (status) => {
    switch (status) {
        case 'completed':
            return '✅';
        case 'in-progress':
            return '⏳';
        case 'locked':
            return '🔒';
        default:
            return '⭐';
    }
};

const MilestoneCard = ({ title, description, rewardText, status }) => {
    
    const {showNotification}= useNotification();
    const handleClaim = async (milestoneId) =>{
        try {
            const response = await api.patch(`/user/markMilestoneDone/${milestoneId}`)
            // console.log(response)
            let data = localStorage.getItem('milestonsDone');
            if(!data)
                data = '[]';
            let parsedData = JSON.parse(data);
            if(!parsedData.includes(milestoneId))
            parsedData.push(milestoneId);
            localStorage.setItem('milestonesDone',JSON.stringify(parsedData));
            
        } catch(error) {
            console.error(error)
            showNotification('Already Done or Can\'t Claim at the moment')
        }
    }
    let rewardT = "Get ";

    if (rewardText.rewardPixels > 0)
        rewardT += `${rewardText.rewardPixels} Pixels`
    if (rewardText.rewardAnimation)
        rewardT += 'exclusive Animation '
    return (
        <div className={`milestone-card flex justify-between ${status}`}>
            <div className='flex items-center'>
            <div className="milestone-icon">
                {getStatusIcon(status)}
            </div>
            <div className="milestone-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="milestone-reward">
                    <span role="img" aria-label="reward">🎁</span> {rewardT}
                </div>
            </div>
            </div>
            {!status?(
                <div className='bg-gray-600 p-3 px-4 text-xl rounded-2xl text-pretty text-shadow-lg'>Claimed</div>
            ):(
            <button onClick={()=>handleClaim(rewardText._id)} className='bg-yellow-500 p-3 px-4 text-xl hover:font-bold hover:p-4 rounded-2xl text-pretty text-shadow-lg'>Claim</button>
            )}
        </div>
    );
};

export default MilestoneCard;