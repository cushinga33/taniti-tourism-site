import heroImage from '../assets/lodgingHero.jpg';
import Hero from '../components/heroSmall';

import motel from '../assets/motel.jpg';
import resort from '../assets/resort.jpg';
import inn from '../assets/breakfast.jpg';
import hostel from '../assets/hostel.jpg';
import casual from '../assets/convenience.jpg';
import merriton from '../assets/merritonWaterside.jpg';
import international from '../assets/international.jpg';
import local from '../assets/localFlavor.jpg';

export default function LodgingDining() {
    const lodgingOptions = [
    {
        title: 'Luxury Resorts',
        desc: 'Experience world-class service at our premier four-star resort, featuring private beaches and full amenities.',
        image: resort
    },
    {
        title: 'Hotels & Motels',
        desc: 'A wide range of comfortable, centrally-located hotels perfect for families and business travelers.',
        image: motel
    },
    {
        title: 'Inns & B&Bs',
        desc: 'Stay with locals in charming, family-owned bed and breakfasts for a more intimate island experience.',
        image: inn
    },
    {
        title: 'Hostels',
        desc: 'Budget-friendly accommodations perfect for backpackers and social travelers looking to meet others.',
        image: hostel
    }
    ];

    const diningOptions = [
    {
        title: 'Local Flavor',
        desc: 'Sample Taniti\'s staple fresh fish and rice dishes at family-run eateries across the island.',
        image: local

    },
    {
        title: 'International Cuisine',
        desc: 'Enjoy a variety of global flavors, including high-end American and traditional Pan-Asian restaurants.',
        image: international
    },
    {
        title: 'Merriton Landing',
        desc: 'Explore the island\'s newest culinary hub, featuring waterfront dining and a lively atmosphere.',
        image: merriton
    },
    {
        title: 'Casual Eats',
        desc: 'Quick bites, cafes, and 24-hour convenience options for travelers on the go.',
        image: casual
    }
    ];
    return ( 
        <div className="relative">
                <Hero
                image={heroImage}
                header='Your Home in' 
                highlight="Paradise" 
                subheader="From luxurious four-star resorts to charming family-owned bed and breakfasts, discover the perfect place to rest and refuel on Taniti." 
                buttons={[
                    {title: 'Lodging', link: '#lodging' },
                    {title: 'Dining', link: '#dining' },
                ]}
                />
                <div className="h-[60vh]" aria-hidden="true"/>
                <section className={`relative z-20 -mt-16 rounded-t-[2.5rem] bg-gradient-to-tl from-[#bce8ff] to-[#00AAFF] px-6 pb-24 pt-12 shadow-[0_-24px_80px_rgba(15,23,42,0.28)] min-h-screen transition-[border-radius] duration-300 flex flex-col gap-12 items-center justify-center`}>
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='lodging'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>Find Your Perfect Stay</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>From luxurious four-star resorts to charming, family-owned bed and breakfasts, discover a place that feels like home on our tropical island.</h1>    
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mb-12'>
                        {lodgingOptions.map(({ title, desc, image }) => (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1">
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
                    <div className='flex w-full justify-center flex-col items-center text-center mt-6 max-w-4xl' id='dining'>
                        <h1 className='font-body text-4xl font-bold text-[#11386c]'>A Taste of Taniti</h1>
                        <h1 className='font-body text-xl text-[#11386c] mt-4'>From fresh, locally-sourced seafood at family-owned eateries to world-class international cuisine, discover the flavors that make our island unique.</h1>    
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mb-12'>
                        {diningOptions.map(({ title, desc, image }) => (
                            <div className="grid grid-cols-1 grid-rows-2 gap-6 bg-gray-100/85 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-[translate,box-shadow] duration-300 hover:-translate-y-1">
                                <div className="">
                                    <img src={image} alt={title} className="object-cover w-full h-full rounded-xl aspect-square" />
                                </div>
                                <div key={title} className="flex items-center flex-col justify-start gap-2 ">
                                    <h2 className="font-body text-2xl font-bold text-[#11386c] mt-2">{title}</h2>
                                    <p className="font-body text-lg text-[#11386c] mt-6 text-center">{desc}</p>
                                </div>
                            </div>

                        ))} 
                    </div>
                </section>

        </div>
    );
}