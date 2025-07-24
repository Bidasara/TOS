import React,{useState} from 'react';
import SpriteDemo from '../components/AnimationPart/SpriteAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const animationPacks = [
  {
    id: 1,
    scale: 2,
    name: 'Demon',
    description: 'Add fiery effects to your projects with this blazing animation set.',
    price: '$4.99',
  },
  // {
  //   id: 2,
  //   scale: 2.5,
  //   name: 'Knight',
  //   description: 'Electrify your UI with stunning lightning animations.',
  //   price: '$4.99',
  // },
  {
    id: 3,
    scale: 3,
    name: 'Wizard',
    description: 'Unlock magical and demonic break effects for your users.',
    price: '$7.99',
  },
  {
    id: 4,
    scale: 2,
    name: 'Rabbit',
    description: 'Experience the agility and charm of our rabbit animations.',
    price: '$4.99',
  }
];

function AnimationCard({pack}){
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  return (
    <div onMouseEnter={() => {
              setCurrentAnimation('attack_1');
            }} onMouseLeave={() => {
              setCurrentAnimation('idle');
            }} className="flex-start flex lg:h-70 lg:w-350 sm:h-80 sm:w-150 bg-gray-100 rounded-md p-2">
                 {/* The h-40 w-40 (or larger) ensures space for the sprite. Adjust if your sprites are larger. */}
                 {/* Added background for visual separation and centering the sprite within this container */}
              <SpriteDemo character={pack.name} move={currentAnimation} scale={pack.scale} />
            </div>
  )
}



const PricePage = () => {
  const { getCart, addToCart, removeFromCart} = useAuth();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const { theme,triggerAttack } = useTheme();
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  return (
    <div className={`py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center transition-all duration-300 overflow-x-hidden
      ${theme === 'tos' ? 'tos' : 'bg-gray-50'}`}>
      <div className="max-w-2xl text-center">
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-700'}`}>Animation Packs Store</h1>
        <p className={`text-lg sm:text-xl mb-12 ${theme === 'tos' ? 'tos-light' : 'text-gray-600'}`}>
          Upgrade your experience! Purchase premium animation packs to unlock special break effects and support development.
        </p>
      </div>

      <div className="w-full max-w-5xl">
        {animationPacks.map(pack => (
          <div
            key={pack.id}
            className={`w-full flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 transition-shadow duration-300
              ${theme === 'tos' ? 'bg-tos-bg tos-border border-2 rounded-xl p-6 sm:p-8 shadow-lg hover:tos-shadow' : 'border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-lg hover:shadow-xl'}`}
          >
            {/* Text Content Block */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${theme === 'tos' ? 'tos-accent tos-theme-mono' : 'text-indigo-600'}`}>{pack.name}</h2>
              <p className={`text-base sm:text-lg mb-4 flex-grow ${theme === 'tos' ? 'tos-light' : 'text-gray-700'}`}>{pack.description}</p>
              <p className={`text-2xl sm:text-3xl font-extrabold mb-6 ${theme === 'tos' ? 'tos-accent' : 'text-indigo-700'}`}>{pack.price}</p>
              <button  className={`font-semibold px-6 py-3 rounded-lg transition duration-200 ease-in-out focus:outline-none
                ${theme === 'tos' ? 'tos-border tos-accent tos-theme-mono bg-tos-bg hover:bg-tos-blue hover:text-tos-grey' : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'}`}
              >
                Buy Now
              </button>
            </div>
            <AnimationCard key={pack.id} pack={pack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePage;