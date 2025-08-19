import React, { useState, useEffect } from 'react';
import { useProblemContext } from '../contexts/ProblemContext';

const popularTags = ['python', 'javascript', 'machine-learning', 'reactjs', 'sql'];

// --- View Components ---

const ComingSoonPlaceholder = () => (
    <div className="relative w-full md:w-1/3 rounded-lg overflow-hidden bg-red-500 h-full">
        {/* Blurred Background Content (Simulating Original UI) */}
        <div className="absolute pointer-events-none p-2 bg-yellow-500 w-5/6 h-full">
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
        <div className="relative flex items-center justify-center h-full backdrop-blur-3xl w-full p-12">
            <div className="bg-white/95 backdrop-blur-2xl border w-full border-slate-300 rounded-xl p-8 shadow-2xl text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Launching Soon!</h3>
                <p className="text-slate-600 max-w-sm">
                    A new way to filter questions, create your own custom lists, and browse collections shared by other users based on stars and popularity.
                </p>
            </div>
        </div>
    </div>
);

// --- MODIFIED OwnerLists Component ---
const OwnerLists = () => {
    // 1. State to hold the lists. It defaults to an empty array.
    const [lists, setLists] = useState([]);
    const { addToList ,recomList} = useProblemContext();
    useEffect(() => {
    const fetchRecomLists = async () => {
      const storedData = localStorage.getItem("recomLists");
      if (storedData) {
        try {
          setLists(JSON.parse(storedData));
          return;
        } catch (err) {
          console.error("Error parsing data", err);
        }
      } else {
        try {
          const response = await api.get('/data/recomLists');
          setLists(response.data.data);
          localStorage.setItem("recomLists", JSON.stringify(response.data.data));
        } catch (error) {
          console.error("Error fetching recommended lists", error);
          setLists([]);
        }
      }
    };
    fetchRecomLists();
  }, []);

    // 2. Effect hook to run code when the component mounts.
    useEffect(() => {
        try {
            // Retrieve the string from localStorage
            const storedLists = localStorage.getItem('recomLists');

            // If data exists, parse it and update the state.
            if (storedLists) {
                setLists(JSON.parse(storedLists));
            }
        } catch (error) {
            console.error("Failed to parse recomLists from localStorage:", error);
            // Handle potential errors, e.g., if the data is not valid JSON.
        }
    }, []); // The empty array [] means this effect runs only once after the initial render.

    return (
        <div className="w-full md:w-2/3 h-full">
            <div className="bg-white rounded-xl h-full overflow-scroll flex flex-col gap-2 p-3 shadow-lg border border-slate-200">
                <h3 className="font-extrabold text-2xl h-1/12 text-slate-900 ">Featured Lists</h3>
                <div className="h-11/12 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                    {/* 3. Map over the 'lists' state variable instead of the old mock data */}
                    {recomList.length > 0 ? (
                        recomList.map(list => (
                            <div key={list._id} className=" border-b h-4/12 flex justify-between items-center border-slate-200">
                                <div className='w-10/12 p-1'>
                                    <a href="#" className="font-bold text-lg text-slate-800 hover:text-blue-600 transition-colors">
                                        {list.title}
                                    </a>
                                    <div className='flex gap-2 py-2 overflow-y-hidden overflow-x-hidden w-full relative'>
                                        {list.categories.length > 0 ? (
                                            list.categories.map(cat => (
                                                <div key={cat.title} className='bg-slate-500 shrink-0 text-white px-2 py-0.5 rounded-lg'>{cat.title}</div>
                                            ))
                                        ) : ("")}
                                        <div className='fading-overflow w-full absolute h-full'></div>
                                    </div>
                                    <p className="text-sm px-2 text-slate-500">
                                        by <span className="font-medium">{list.byAdmin ? "Admin" : "Anonymous"}</span>
                                    </p>
                                    <div className="flex gap-2 relative w-full overflow-y-auto overflow-x-auto">
                                        {/* Ensure topics is an array before mapping */}
                                        {Array.isArray(list.topics) && list.topics.map(topic => (
                                            <span key={topic} className="text-xs bg-slate-100 text-slate-700 font-medium rounded-full">{topic}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-2/12 flex justify-center items-center'>
                                    <button onClick={() => {
                                            addToList(list._id)

                                        }} className='border-2 border-black rounded-2xl p-2'>Add +</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500">No recommended lists found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- The Main Page Component ---

export default function BrowsePage() {
    return (
        <div className="bg-slate-50 font-sans h-9/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <header className="text-center h-3/12 content-center">
                    <h2 className="text-5xl font-extrabold text-slate-900">Problem Library</h2>
                    <p className="mt-3 text-lg text-slate-500">Discover curated problem lists </p>
                </header>
                <div className="flex flex-col md:flex-row gap-8 h-8/12 content-center">
                    <ComingSoonPlaceholder />
                    <OwnerLists />
                </div>
            </div>
        </div>
    );
}