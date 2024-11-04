import React from 'react';

export interface WorkExperienceItem {
    startDate: string;
    endDate: string;
    companyName: string;
    jobTitle: string;
    description: string[];
}
interface TimelineProps {
    data: WorkExperienceItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    return <div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            {data.map((item,index) => (<li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.startDate} - {item.endDate}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {item.jobTitle} at {item.companyName}</h3>
        <ol>
            {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ol>
    </li>))}

                  


    
</ol>


    </div>
}

export default Timeline;