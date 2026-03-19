import Hero from '../components/hero';
import restaurant from '../assets/restaurantsHome.jpg';
import sightseeing from '../assets/sightseeingHome.jpg';
import entertainment from '../assets/entertainmentHome.jpg';
import transportation from '../assets/transportationHome.jpg';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { ImPowerCord } from "react-icons/im";
import { BiSolidDrink } from "react-icons/bi";
import { FaDollarSign, FaStore  } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineDirectionsTransit } from "react-icons/md";
import { LuPartyPopper, LuHotel } from "react-icons/lu";
import { PiMountainsFill } from "react-icons/pi";

export default function Home() {
    const exploreCards = [
        {title: "Restaurants", desc: "Enjoy international American and Pan-Asian cuisine across 10 unique island eateries.", shape: 'tall', meta: 'View Options', image: restaurant, icon: <IoIosRestaurant />, link: '/lodging-dining#dining'},
        {title: "Grocery Stores", desc: "From 24-hour convenience shops to full-service supermarkets.", shape: 'square', meta: 'See Stores', icon: <FaStore />, link: '/lodging-dining#dining'},
        {title: "Transportation", desc: "Navigate with ease via public buses, taxis, or private car and bike rentals.", shape: 'wide', meta: 'Explore Transit', image: transportation, icon: <MdOutlineDirectionsTransit />, link: '/transit'},
        {title: "Entertainment", desc: "Experience the vibrant nightlife and entertainment scene in Taniti, with live music, theaters, and more.", shape: 'wide', meta: 'Discover', image: entertainment, icon: <LuPartyPopper />, link: '/explore#entertainment'},
        {title: "Lodging", desc: "Find the perfect place to stay in Taniti, from cozy inns to luxurious resorts.", shape: 'square', meta: 'View Lodging', icon: <LuHotel />, link: '/lodging-dining#lodging'},
        {title: "Sightseeing", desc: "Explore the top attractions and landmarks in Taniti, from historical sites to natural wonders.", shape: 'tall', meta: 'Explore Attractions', image: sightseeing, icon: <PiMountainsFill />, link: '/explore#sites'},
    ]
    const faqCards = [
        {title: 'Power outlets are 120 volts (U.S. standard)', icon: <ImPowerCord />},
        {title: 'Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.', icon: <BiSolidDrink />},
        {title: 'Taniti uses the U.S. dollar as its currency, but many businesses accept euros and yen', icon: <FaDollarSign />},
    ]
    return (
        <div className="relative">
            <Hero />
            <div className="min-h-screen" aria-hidden="true" />

            <section className={`relative z-20 -mt-16 rounded-t-[2.5rem] bg-gradient-to-tl from-[#bce8ff] to-[#00AAFF] px-6 pb-24 pt-12 shadow-[0_-24px_80px_rgba(15,23,42,0.28)] min-h-screen transition-[border-radius] duration-300`}>
                <div className='flex w-full justify-center flex-col items-center text-center my-12'>
                    <h1 className='font-body text-4xl font-bold text-[#11386c]'>Discover the Island</h1>
                    <h1 className='font-body text-xl text-[#11386c] mt-4'>From the volcanic peaks to the bustling streets of Taniti City, find everything you need to plan your stay.</h1>    
                </div>
                <div className='flex flex-col gap-6 md:grid md:grid-cols-5 max-w-6xl mx-auto homepage-explore-cards'>
                    {exploreCards.map(({ title, desc, shape, meta, image, icon, link }) => (
                        <div key={title} className={`bg-gray-100/85 rounded-2xl p-2 gap-2 shadow-lg ${shape == 'tall' && 'flex flex-col md:grid grid-rows-2'} ${shape == 'wide' && 'flex flex-col md:grid grid-cols-2'}`}>
                            <div className={`flex flex-col items-center text-center justify-between md:h-full p-2`}>
                                <div className='flex flex-col items-center text-center gap-1'>
                                    <h2 className='font-body text-xl font-semibold mb-2 text-[#11386c] flex items-center justify-center gap-2'>{title}<span className='text-xl'>{icon}</span></h2>
                                    <p className='text-[#11386c] text-md'>{desc}</p>
                                </div>
                                {!(shape == 'tall') && (
                                    (link && link.includes('#'))
                                    ? <HashLink to={link} smooth className='text-[#00AAFF] mt-2 text-center underline underline-offset-3 py-2'>{meta}</HashLink>
                                    : <Link to={link} className='text-[#00AAFF] mt-2 text-center underline underline-offset-3 py-2'>{meta}</Link>
                                )}
                            </div>
                            {(shape == 'wide' || shape == 'tall') && 
                                <div className='bg-[#00AAFF] rounded-xl'>
                                    <img src={image} alt={title} loading="lazy" decoding="async" className='object-cover w-full h-full rounded-xl' />
                                </div>
                            }
                            {shape == 'tall' && (
                                (link && link.includes('#'))
                                ? <HashLink to={link} smooth className='text-[#00AAFF] mt-2 text-center underline underline-offset-3 py-2'>{meta}</HashLink>
                                : <Link to={link} className='text-[#00AAFF] mt-2 text-center underline underline-offset-3 py-2'>{meta}</Link>
                            )}

                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center">
                    <Link
                        to="/explore"
                        className="mt-8 rounded-xl bg-[linear-gradient(135deg,#ffcf33_0%,#ffb703_100%)] px-8 py-3 text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:-translate-y-1 hover:brightness-105"
                    >
                        Explore the Island
                    </Link>
                </div>
                <div className='flex w-full justify-center flex-col items-center max-w-4xl mx-auto my-12'>
                    <h1 className='font-body text-4xl font-bold text-[#11386c]'>Island Information</h1>
                    <h1 className='font-body text-xl text-[#11386c] mt-4'>Essential details to help you plan your stay.</h1>    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                        {faqCards.map(({title, icon}) => (
                            <div key={title} className='flex items-center flex-col max-w-6xl mx-auto mb-6 bg-gray-100/85 rounded-2xl p-8 justify-between gap-2 shadow-lg '>
                                <div className="text-[#00AAFF] text-3xl">{icon}</div>
                                <p className='text-[#11386c] text-md text-center'>{title}</p>
                                    
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-center">
                        <Link
                            to="/planning"
                            className="mt-8 rounded-xl bg-[linear-gradient(135deg,#ffcf33_0%,#ffb703_100%)] px-8 py-3 text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:-translate-y-1 hover:brightness-105"
                        >
                            View More Information
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}