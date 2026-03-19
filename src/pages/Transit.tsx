import heroImage from '../assets/airport.jpg';
import Hero from '../components/heroSmall';

import air from '../assets/air.jpg';
import sea from '../assets/sea.jpg';
import bus from '../assets/bus.jpg';
import taxi from '../assets/taxi.jpg';
import car from '../assets/car.jpg';
import helmet from '../assets/helmet.jpg';
import { IoAirplaneOutline } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { MdOutlineDirectionsBoat } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { MdOutlinePedalBike } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";

export default function Transit() {
    const arrivalOptions = [
    {
        title: 'By Air',
        desc: 'Most visitors arrive at our modern airport, capable of handling jet aircraft. Small regional carriers also offer frequent local flights.',
        image: air,
        icon: <IoAirplaneOutline />
    },
    {
        title: 'By Sea',
        desc: 'Cruise ships dock in our deep-water harbor at Taniti City, offering a scenic entry point to the island.',
        image: sea,
        icon: <MdOutlineDirectionsBoat />
    }
    ];

    const groundTransport = [
    {
        title: 'Public Bus',
        desc: 'Our efficient bus system runs daily from 5 a.m. to 11 p.m. Routes circle the island and service Taniti City every 15 minutes.',
        image: bus,
        icon: <FaBusAlt />
    },
    {
        title: 'Taxis',
        desc: 'Taxis are readily available in Taniti City. All taxis are regulated by the government and use standard flat rates.',
        image: taxi,
        icon: <FaTaxi />
    },
    {
        title: 'Car & Bike Rentals',
        desc: 'Rental agencies are located near the airport. Choose from cars, SUVs, or bicycles to explore at your own pace.',
        image: car,
        icon: <MdOutlinePedalBike />
    },
    {
        title: 'Important Note',
        desc: 'Helmets are required by law for all cyclists. Please prioritize safety while enjoying our island roads!',
        image: helmet,
        icon: <FaHelmetSafety />
    }
    ];
    return ( 
        <div className="relative">
                <Hero
                image={heroImage}
                header='Navigating' 
                highlight="Paradise" 
                subheader="From arriving at our modern airport to exploring the island by bus, car, or bike, getting around Taniti is as easy as an island breeze." 
                buttons={[
                    {title: 'Arriving', link: '#arriving' },
                    {title: 'Getting Around', link: '#ground-transport' },
                ]}
                />
                <div className="h-[60vh]" aria-hidden="true"/>
                <section className={`relative z-20 -mt-16 rounded-t-[2.5rem] bg-gradient-to-tl from-[#bce8ff] to-[#00AAFF] px-6 pb-24 pt-12 shadow-[0_-24px_80px_rgba(15,23,42,0.28)] min-h-screen transition-[border-radius] duration-300 flex flex-col gap-12 items-center justify-center`}>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='arriving'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Arriving in Paradise</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>Whether you’re touching down at our modern international airport or docking in the historic deep-water harbor, your journey begins the moment you arrive.</h1>    
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mb-12'>
                        {arrivalOptions.map(({ title, desc, image, icon }) => (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1">
                                <div key={title} className="flex items-center flex-col justify-center gap-4 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2 flex items-center">{title}<span className="ml-2">{icon}</span></h2>
                                    <p className="font-body text-lg text-[#11386c] mt-2 text-center">{desc}</p>
                                </div>
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl aspect-square" />
                                </div>
                            </div>

                        ))} 
                    </div>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='ground-transport'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Island Transit</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>Explore every corner of Taniti with ease. Navigate our scenic routes via our reliable public bus system, local taxis, or your own private rental.</h1>    
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mb-12'>
                        {groundTransport.map(({ title, desc, image, icon }) => (
                            <div className="grid grid-cols-1 grid-rows-2 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1">
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl aspect-square" />
                                </div>
                                <div key={title} className="flex items-center flex-col justify-start gap-2 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2 flex items-center">{title}<span className='ml-2'>{icon}</span></h2>
                                    <p className="font-body text-lg text-[#11386c] mt-6 text-center">{desc}</p>
                                </div>
                            </div>

                        ))} 
                    </div>
                </section>

        </div>
    );
}