import heroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Hero() {
	return (
		<section className="fixed inset-0 flex min-h-screen min-w-full items-center justify-center overflow-hidden">
			<img
				src={heroImage}
				alt="Island View"
				className="absolute inset-0 h-full w-full object-cover saturate-150 brightness-90"
			/>
			<div
				className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.3)_22%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0.28)_76%,rgba(0,0,0,0.62)_100%)]"
				aria-hidden="true"
			/>
			<div className="absolute top-0 z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-4 h-screen justify-center">
				<h1 className="font-body mb-8 text-4xl font-bold leading-[1.15] tracking-wide text-white sm:text-5xl md:text-7xl">
					Experience the <span className="inline-block pb-[0.08em] bg-[linear-gradient(135deg,#fff3b0_0%,#ffe066_22%,#ffcf33_48%,#ffb703_72%,#fb8500_100%)] bg-clip-text text-transparent">Magic</span> of Taniti
				</h1>
				<h2 className="font-body mt-4 max-w-2xl text-lg text-white sm:text-xl md:text-2xl">
					From the vibrant energy of Taniti City to the serene shores of Yellow Leaf Bay, we&apos;ve made planning your tropical getaway easier than ever.
				</h2>
				<h2 className="font-body italic mt-4 max-w-2xl text-lg text-white sm:text-xl md:text-2xl">
					Welcome to the island.
				</h2>
				<div className="my-8 flex w-full justify-center flex flex-col items-center">
					<Link
						to="/explore"
						className="mt-8 rounded-xl bg-[linear-gradient(135deg,#ffcf33_0%,#ffb703_100%)] px-8 py-3 text-lg font-semibold text-white tracking-wide transition-transform duration-300 hover:-translate-y-1 hover:brightness-105"
					>
						Plan Your Visit
					</Link>
				</div>


			</div>
            <div className='absolute bottom-20 z-100'>
                <button className='border-none bg-transparent cursor-pointer focus:outline-none' onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} aria-label="Scroll down to content">
                    <FaAngleDoubleDown className='animate-bounce text-4xl text-white' aria-hidden="true" />
                </button>
            </div>
		</section>
	);
}
