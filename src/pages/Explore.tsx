import React from 'react';
import heroImage from '../assets/exploreHero.jpg';
import Hero from '../components/heroSmall';
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import tanitiCity from '../assets/tanitiCity.jpg';
import yellowLeafBay from '../assets/whiteSand.jpg';
import volcano from '../assets/volcano.jpg';
import boatTour from '../assets/boatTour.jpg';
import snorkeling from '../assets/snorkeling.jpg';
import ziplining from '../assets/ziplining.jpg';
import helicopter from '../assets/helicopter.jpg'
import fishing from '../assets/fishing.jpg';
import merriton from '../assets/merriton.jpg';
import nightlife from '../assets/nightlife.jpg';
import arts from '../assets/museum.jpg';
import familyFun from '../assets/arcade.jpg';

export default function Explore() {
    const sightseeingCards = [
    {
        title: 'Taniti City', 
        desc: 'Explore authentic native architecture and the island\'s vibrant cultural center, steps from Yellow Leaf Bay.',
        image: tanitiCity
    },
    {
        title: 'Yellow Leaf Bay', 
        desc: 'Relax on world-famous white, sandy beaches encircling the island\'s most iconic and serene coastline.',
        image: yellowLeafBay

    },
    {
        title: 'The Active Volcano', 
        desc: 'Trek through volcanic landscapes to the summit for breathtaking panoramic views of the entire island.',
        image: volcano
    },
    {
        title: 'Island Tours', 
        desc: 'Choose between boat or bus tours to discover hidden coves, rainforest vistas, and scenic landmarks.',
        image: boatTour
    }
    ];
    const islandActivities = [
    {
        title: 'Rainforest Zip-lining',
        desc: 'Soar through the lush tropical canopy for a high-speed bird\'s-eye view of the island.',
        image: ziplining
    },
    {
        title: 'Snorkeling Tours',
        desc: 'Explore vibrant reefs and crystal-clear lagoons teeming with native Pacific marine life.',
        image: snorkeling
    },
    {
        title: 'Helicopter Rides',
        desc: 'Take to the skies for an unforgettable aerial tour of the active volcano and hidden coves.',
        image: helicopter
    },
    {
        title: 'Chartered Fishing',
        desc: 'Head out to sea with local experts for a premier deep-sea fishing experience.',
        image: fishing
    }
    ];

    const islandEntertainment = [
    {
        title: 'Merriton Landing',
        desc: 'Discover the island\'s newest hub for dining, shopping, and social life on the north side of the bay.',
        image: merriton
    },
    {
        title: 'Nightlife & Drinks',
        desc: 'Enjoy local island hospitality at our microbrewery, vibrant pubs, or the new dance club.',
        image: nightlife
    },
    {
        title: 'Arts & History',
        desc: 'Immerse yourself in Taniti\'s story at the local history museum and contemporary art galleries.',
        image: arts
    },
    {
        title: 'Family Fun',
        desc: 'Relax with a movie, challenge high scores at the arcade, or enjoy a night of bowling.',
        image: familyFun
    }
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
        window.addEventListener("resize", updateNavbarState);

        return () => {
            window.removeEventListener("scroll", updateNavbarState);
            window.removeEventListener("resize", updateNavbarState);
        };
    }, [pathname]);

    return ( 
        <div className="relative">
                <Hero
                image={heroImage}
                header='Experience Everything' 
                highlight="Taniti" 
                subheader="From the vibrant energy of Taniti City to the serene shores of Yellow Leaf Bay, we've made planning your tropical getaway easier than ever." 
                buttons={[
                    {title: 'Explore Sites', link: '#sites' },
                    {title: 'Discover Activities', link: '#activities' },
                    {title: 'Island Entertainment', link: '#entertainment' },
                ]}
                />
                <div className="h-[60vh]" aria-hidden="true"/>
                <section className={`relative z-20 -mt-16 ${hasCorners ? 'rounded-t-[2.5rem]' : ''} bg-gradient-to-tl from-[#bce8ff] to-[#00AAFF] px-6 pb-24 pt-12 shadow-[0_-24px_80px_rgba(15,23,42,0.28)] min-h-screen transition-all duration-300 flex flex-col gap-12 items-center justify-center`}>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='sites'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Natural Wonders</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>From the historic architecture of Taniti City to the awe-inspiring glow of our active volcano, witness the landmarks that define the Pacific.</h1>    
                    </div>
                    <div className='grid grid-cols-1 md: grid-cols-2 grid-rows-2 gap-6 max-w-6xl mb-12'>
                        {sightseeingCards.map(({ title, desc, image }) => (
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover: shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div key={title} className="flex items-center flex-col justify-center gap-4 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2">{title}</h2>
                                    <p className="font-body text-lg text-[#11386c] mt-2 text-center">{desc}</p>
                                </div>
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl aspect-square" />
                                </div>
                            </div>

                        ))} 
                    </div>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='activities'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Adventure Awaits</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>From the depths of our crystal-clear lagoons to the heights of the rainforest canopy, find your next adrenaline rush in Taniti's natural playground.</h1>    
                    </div>
                    <div className='grid grid-cols-1 md: grid-cols-4 grid-rows-1 gap-6 max-w-6xl mb-12'>
                        {islandActivities.map(({ title, desc, image }) => (
                            <div className="grid grid-cols-1 grid-rows-2 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover: shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl" />
                                </div>
                                <div key={title} className="flex items-center flex-col justify-start gap-2 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2">{title}</h2>
                                    <p className="font-body text-lg text-[#11386c] mt-2 text-center">{desc}</p>
                                </div>
                            </div>

                        ))} 
                    </div>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='entertainment'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Beyond the Horizon</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>From the historic architecture of Taniti City to the awe-inspiring glow of our active volcano, witness the landmarks that define the Pacific.</h1>    
                    </div>
                    <div className='grid grid-cols-1 md: grid-cols-2 grid-rows-2 gap-6 max-w-6xl'>
                        {islandEntertainment.map(({ title, desc, image }) => (
                            <div className="grid grid-cols-2 grid-rows-1 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover: shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div key={title} className="flex items-center flex-col justify-center gap-4 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2">{title}</h2>
                                    <p className="font-body text-lg text-[#11386c] mt-2 text-center">{desc}</p>
                                </div>
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl aspect-square" />
                                </div>
                            </div>

                        ))} 
                    </div>
                </section>

        </div>
    );
}