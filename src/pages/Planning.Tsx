import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { FaMoneyBill } from "react-icons/fa";
import { MdOutlinePower } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaHospital } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import heroImage from '../assets/planningHero.jpg';
import Hero from "../components/heroSmall";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Planning() {
    const islandEssentials = [
        {
            title: 'Money & Currency',
            desc: 'The U.S. Dollar is the official currency, though many businesses also accept Euros and Yen. Major credit cards are widely used, and local banks facilitate easy currency exchange.',
            icon: <FaMoneyBill />
        },
        {
            title: 'Power & Voltage',
            desc: 'Taniti uses 120-volt electricity (the same as the U.S.). Standard North American plugs are used throughout the island, so no adapters are required for U.S. devices.',
            icon: <MdOutlinePower />
        },
        {
            title: 'Language & Literacy',
            desc: 'English is fluently spoken by many younger Tanitians and in tourist hubs. In rural areas and among older residents, English is less common, offering a more traditional experience.',
            icon: <LiaLanguageSolid/>
        }
    ];

    const healthAndSafety = [
        {
            title: 'Medical Services',
            desc: 'The island features one modern hospital and several clinics. To assist international travelers, the hospital employs a large number of multilingual staff members.',
            icon: <FaHospital />
        },
        {
            title: 'Island Safety',
            desc: 'Violent crime is very rare on Taniti. However, as tourism grows, pickpocketing and petty crimes have been reported in crowded areas. Stay mindful of your belongings.',
            icon: <FaShieldAlt />
        },
        {
            title: 'Alcohol Laws',
            desc: 'The legal drinking age is 18. Please note that alcohol sales and service are strictly prohibited between the hours of midnight and 9:00 a.m. daily.',
            icon: <FaCocktail />
        }
    ];
    const holidayClosures = [
        { date: 'Jan 1', name: 'New Year\'s Day', status: 'Full Closure' },
        { date: 'May 1', name: 'Taniti Heritage Day', status: 'Limited Services' },
        { date: 'June 21', name: 'Solstice Festival', status: 'Full Closure' },
        { date: 'Aug 15', name: 'Independence Day', status: 'Full Closure' },
        { date: 'Dec 25', name: 'Winter Holiday', status: 'Full Closure' }
    ];
    const { pathname } = useLocation();
    const [hasCorners, setHasCorners] = useState(true);

    useEffect(() => {
        const updateNavbarState = () => {
            const heroEl = document.querySelector('[data-hero]') as HTMLElement | null;
            const heroHeight = heroEl ? heroEl.getBoundingClientRect().height : window.innerHeight * 0.6;
            const heroTransitionPoint = Math.max(heroHeight - 100, 120);
            setHasCorners(window.scrollY < heroTransitionPoint);
        };

        updateNavbarState();
        window.addEventListener("scroll", updateNavbarState, { passive: true });

        let resizeTimer: ReturnType<typeof setTimeout>;
        const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(updateNavbarState, 150); };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", updateNavbarState);
            window.removeEventListener("resize", onResize);
            clearTimeout(resizeTimer);
        };
    }, [pathname]);
    return (
        <div className="relative">
            <Hero
                image={heroImage}
                header='Prepare For Your' 
                highlight="Journey" 
                subheader="Everything you need to know about local laws, health, safety, and essential island logistics to ensure a seamless visit." 
                buttons={[
                    {title: 'Essentials', link: '#essentials' },
                    {title: 'Health & Safety', link: '#health-and-safety' },
                    {title: 'Holiday Schedule', link: '#major-holiday-schedule' }
                ]}
            />
            <div className="h-[60vh]" aria-hidden="true"/>
            <section className={`flex flex-col -mt-16 items-center w-full pt-20 min-h-screen mx-auto relative bg-gray-50 ${hasCorners ? 'rounded-t-[2.5rem]' : ''}`}>
                <div className="flex w-full items-center flex-col justify-center max-w-6xl mx-auto mb-6">
                    <div className='flex w-full justify-center flex-col text-center items-center my-6 max-w-4xl' id='essentials'>
                        <h1 className='font-body text-4xl text-center font-bold text-[#11386c]'>Island Essentials</h1>
                        <h1 className='font-body text-xl text-center text-[#11386c] mt-4'>From local currency to power standards, here is the technical information you need for a smooth transition to island life.</h1>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 p-4 md:p-6">
                        {islandEssentials.map(({ title, desc, icon }) => (
                            <div key={title} className='flex flex-col items-center text-center my-6 bg-gray-100/85 rounded-2xl p-6 shadow-md hover:shadow-lg transition-[translate,box-shadow] duration-300 hover:-translate-y-1 border-2 border-[#00AAFF]'>
                                <div className='text-4xl mb-4 text-[#00AAFF]'>{icon}</div>
                                <h2 className='font-body text-2xl font-bold text-[#11386c]'>{title}</h2>
                                <p className='font-body text-lg text-[#11386c] mt-2'>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full items-center flex-col justify-center max-w-6xl mx-auto mb-6">
                    <div className='flex w-full justify-center flex-col text-center items-center my-6 max-w-4xl' id='health-and-safety'>
                            <h1 className='font-body text-4xl text-center font-bold text-[#11386c]'>Stay Safe and Informed</h1>
                            <h1 className='font-body text-xl text-center text-[#11386c] mt-4'>Your safety is our priority. Please familiarize yourself with our local laws and medical resources to ensure a worry-free visit.</h1>
                        </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 p-4 md:p-6">
                        {healthAndSafety.map(({ title, desc, icon }) => (
                            <div key={title} className='flex flex-col items-center text-center my-6 bg-gray-100/85 rounded-2xl p-6 shadow-md hover:shadow-lg transition-[translate,box-shadow] duration-300 hover:-translate-y-1 border-2 border-[#00AAFF]'>
                                <div className='text-4xl mb-4 text-[#00AAFF]'>{icon}</div>
                                <h2 className='font-body text-2xl font-bold text-[#11386c]'>{title}</h2>
                                <p className='font-body text-lg text-[#11386c] mt-2'>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="flex w-full bg-gradient-to-tl from-[#bce8ff] to-[#00AAFF] pb-24 justify-center rounded-t-[2.5rem]">
                    <div className="flex items-center flex-col justify-center max-w-6xl mb-6">
                        <div className='flex w-full justify-center flex-col mt-12 px-6' id='major-holiday-schedule'>
                            <h1 className='font-body text-4xl font-bold text-[#11386c] flex items-center'>Major Holiday Schedule<span className='ml-2'><FaRegCalendarAlt /></span></h1>
                            <h1 className='font-body text-xl text-[#11386c] mt-4'>Avoid scheduling your main activities on these dates as many businesses will be closed.</h1>
                        </div>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 p-4 md:p-6">
                            {holidayClosures.map(({ date, name, status }) => (
                                <div className="flex flex-col items-center text-center justify-around my-6 bg-gray-100/85 rounded-2xl p-4 shadow-md hover:shadow-lg transition-[translate,box-shadow] duration-300 hover:-translate-y-1 min-h-[10rem] md:h-[25vh]">
                                    <div className="flex flex-col items-center">
                                        <h2 className='font-body text-2xl text-[#00AAFF] font-bold mt-2'>{date.split(" ")[0]}</h2>
                                        <h2 className='font-body text-4xl text-[#00AAFF] font-bold'>{date.split(" ")[1]}</h2>    
                                    </div>    
                                    <div className="flex flex-col items-center">
                                        <h2 className='font-body text-lg font-bold text-[#11386c]'>{name}</h2>
                                        <p className='font-body text-lg text-[#11386c]'>{status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </section>
        </div>
    );
}
