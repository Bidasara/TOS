import React from 'react';
import { FaBrain, FaCode, FaListAlt } from 'react-icons/fa';

// --- Reusable Button Component ---
const Button = ({ children, primary = false }) => (
    <button
        className={`px-6 py-3 font-semibold rounded-lg transition-transform duration-200 ease-in-out ${
            primary 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95' 
            : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 active:scale-95'
        }`}
    >
        {children}
    </button>
);

// --- Navigation Bar ---
const Navbar = () => (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-800">ReviseCoder</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-indigo-600">Features</a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600">Pricing</a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600">Blog</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                     <a href="#" className="text-gray-600 hover:text-indigo-600">Login</a>
                     <Button primary>Sign Up</Button>
                </div>
            </div>
        </div>
    </nav>
);

// --- Hero Section ---
const HeroSection = () => (
    <section className="bg-white text-center py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                Stop Solving. Start Remembering.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Traditional DSA practice is broken. We use spaced repetition and expert-curated notes to burn problem-solving patterns into your memory, turning temporary knowledge into permanent skill.
            </p>
            <div className="mt-8">
                <Button primary>Start Revising for Free</Button>
            </div>
            {/* Visual Placeholder for the forgetting curve */}
            <div className="mt-12 text-gray-300"></div>
        </div>
    </section>
);

// --- How It Works Section ---
const HowItWorksSection = () => (
    <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900">Master DSA in 3 Simple Steps</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                        <FaCode size={32} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-800">1. Solve & Learn</h3>
                    <p className="mt-2 text-gray-600">
                        Solve problems from a vast library. After each solution, access our detailed, expert-written notes to deeply understand the "why" behind the code.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                        <FaBrain size={32} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-800">2. Revise on Autopilot</h3>
                    <p className="mt-2 text-gray-600">
                        Our smart algorithm schedules your solved problems for revision based on the proven spaced repetition technique. We'll notify you when it's time to reinforce a concept.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
                        <FaListAlt size={32} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-800">3. Organize Your Path</h3>
                    <p className="mt-2 text-gray-600">
                        Filter problems by topic, difficulty, or company tags. Create your own custom practice lists or use our curated lists to focus on what matters most for your goals.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// --- Features Section ---
const FeaturesSection = () => (
    <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Everything You Need to Truly Master DSA</h2>
             <div className="space-y-16">
                 {/* Feature 1 */}
                 <div className="grid md:grid-cols-2 gap-10 items-center">
                     <div>
                         <h3 className="text-2xl font-bold text-gray-800">Spaced Repetition Engine</h3>
                         <p className="mt-4 text-lg text-gray-600">Never forget a solution again. Our intelligent system tracks your progress and schedules revisions at optimal intervals, ensuring concepts move from short-term to long-term memory.</p>
                     </div>
                     <div className="bg-gray-100 p-8 rounded-lg text-gray-400">[Visual of a dashboard card: "Due for Revision: 3 Problems"]</div>
                 </div>
                 {/* Feature 2 */}
                 <div className="grid md:grid-cols-2 gap-10 items-center">
                     <div className="bg-gray-100 p-8 rounded-lg text-gray-400 order-last md:order-first">[Visual of high-quality notes snippet]</div>
                     <div>
                         <h3 className="text-2xl font-bold text-gray-800">Premium Notes & Explanations</h3>
                         <p className="mt-4 text-lg text-gray-600">Stop wasting time on confusing editorials. (Coming Soon) We're building a library of high-quality notes for every LeetCode problem, crafted by industry experts.</p>
                     </div>
                 </div>
             </div>
        </div>
    </section>
);


// --- Testimonials Section ---
const TestimonialsSection = () => (
    <section className="bg-gray-50 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Aspiring FAANG Engineers</h2>
            <div className="mt-10 space-y-10">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700 italic">"I used to solve hundreds of problems and forget them a week later. ReviseCoder completely changed the game. The spaced repetition made sure I actually remembered the patterns."</p>
                    <p className="mt-4 font-semibold text-gray-800">- Priya S., Software Engineer at Google</p>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700 italic">"The ability to create custom lists based on company tags was a lifesaver for my interview prep. I felt confident walking into every single interview."</p>
                    <p className="mt-4 font-semibold text-gray-800">- Mark C., Incoming SDE at Amazon</p>
                </div>
            </div>
        </div>
    </section>
);

// --- Final CTA Section ---
const FinalCTASection = () => (
    <section className="bg-indigo-700 text-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to build a skill that lasts a lifetime?</h2>
            <p className="mt-4 text-lg text-indigo-200">Stop the endless cycle of solving and forgetting. Start building a deep, permanent understanding of algorithms today.</p>
            <div className="mt-8">
                <Button>Sign Up Now - It's Free</Button>
            </div>
        </div>
    </section>
);

// --- Footer ---
const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 ReviseCoder. All Rights Reserved.</p>
        </div>
    </footer>
);


// --- Main Homepage Component ---
const Homepage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <HeroSection />
                <HowItWorksSection />
                <FeaturesSection />
                <TestimonialsSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;