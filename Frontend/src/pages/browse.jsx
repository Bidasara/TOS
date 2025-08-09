import React from 'react';

// --- Mock Data (Owner's Lists) ---
const ownerLists = [
    { id: 'list1', title: 'Blind 75', owner: 'neetcode', stars: 2350, topics: ['Array', 'String', 'DP', 'Graph'] },
    { id: 'list2', title: 'Top Interview Questions', owner: 'leetcode', stars: 1890, topics: ['Array', 'Linked List', 'Trees'] },
    { id: 'list3', title: 'NeetCode 150', owner: 'neetcode', stars: 1520, topics: ['DP', 'Graphs', 'Advanced'] },
    { id: 'list4', title: 'FAANG Favorites', owner: 'anon-user', stars: 980, topics: ['System Design', 'Trees'] },
    { id: 'list5', title: 'System Design Fundamentals', owner: 'educative', stars: 4100, topics: ['Architecture', 'Databases', 'API Design'] },
    { id: 'list6', title: 'Striver\'s SDE Sheet', owner: 'takeuforward', stars: 3200, topics: ['Arrays', 'Strings', 'Dynamic Programming'] },
];

const popularTags = ['python', 'javascript', 'machine-learning', 'reactjs', 'sql'];

// --- Helper Components ---

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434L10.788 3.21z" clipRule="evenodd" />
    </svg>
);

// --- View Components ---

const ComingSoonPlaceholder = () => (
    <div className="relative w-full md:w-1/2 p-6 rounded-lg overflow-hidden">
        {/* Blurred Background Content (Simulating Original UI) */}
        <div className="absolute inset-0 filter pointer-events-none p-4">
            {/* Simulate Filter Section */}
            <div className="bg-white/50 rounded-lg p-4 mb-4">
                <input type="text" placeholder="Filter by tags..." className="w-full bg-white/70 border-slate-300 rounded-md py-2 px-3 text-sm text-slate-600 focus:outline-none focus:ring focus:ring-blue-300" disabled />
                <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs text-slate-500 font-medium">Popular:</span>
                    {popularTags.map(tag => (
                        <span key={tag} className="bg-slate-200/70 text-slate-600 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Simulate Question List Header */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-700 text-sm">Questions</h3>
                <select className="bg-white/70 border-slate-300 rounded-md py-1 px-2 text-xs text-slate-600 focus:outline-none focus:ring focus:ring-blue-300" disabled>
                    <option>Newest</option>
                    <option>Most Stars</option>
                </select>
            </div>

            {/* Simulate Question List Items */}
            <div className="space-y-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white/50 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-700 text-sm line-clamp-1">A Question Title Might Go Here</h4>
                        <div className="flex gap-2 mt-1">
                            <span className="bg-slate-100/70 text-slate-500 px-1.5 py-0.5 rounded-full text-xs">tag</span>
                            <span className="bg-slate-100/70 text-slate-500 px-1.5 py-0.5 rounded-full text-xs">another</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* "Feature coming soon" Box that sits on top */}
        <div className="relative flex items-center justify-center h-full">
            <div className="bg-white/95 backdrop-blur-xs border w-1/2 border-slate-300 rounded-xl p-8 shadow-2xl text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Launching Soon!</h3>
                <p className="text-slate-600 max-w-sm">
                    A new way to filter questions, create your own custom lists, and browse collections shared by other users based on stars and popularity.
                </p>
            </div>
        </div>
    </div>
);

const OwnerLists = () => (
    <div className="w-full md:w-1/2 ">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 h-fit">
            <h3 className="font-extrabold text-2xl text-slate-900 mb-5">Featured Lists</h3>
            <div className="space-y-5">
                {ownerLists.map(list => (
                    <div key={list.id} className="pb-5 border-b border-slate-200 last:border-b-0">
                        <a href="#" className="font-bold text-lg text-slate-800 hover:text-blue-600 transition-colors">
                            {list.title}
                        </a>
                        <p className="text-sm text-slate-500 mt-1">
                            by <span className="font-medium">{list.owner}</span>
                        </p>
                        <div className="flex items-center gap-1 text-sm font-semibold text-slate-600 mt-2">
                            <StarIcon />
                            <span>{list.stars.toLocaleString()} Stars</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {list.topics.map(topic => (
                                <span key={topic} className="text-xs bg-slate-100 text-slate-700 font-medium px-2 py-1 rounded-full">{topic}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// --- The Main Page Component ---

export default function BrowsePage() {
    return (
        <div className="bg-slate-50 font-sans h-9/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-slate-900">Problem Library</h1>
                    <p className="mt-3 text-lg text-slate-500">Discover curated problem lists from top creators.</p>
                </header>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left side: The blurred placeholder simulating original UI */}
                    <ComingSoonPlaceholder />

                    {/* Right side: The visible lists from the owner */}
                    <OwnerLists />
                </div>
            </div>
        </div>
    );
}