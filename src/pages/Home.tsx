import Hero from '../components/hero';

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <div className="h-screen" aria-hidden="true" />

            <section className="relative z-20 -mt-16 rounded-t-[2.5rem] bg-[#00AAFF] px-6 pb-24 pt-12 shadow-[0_-24px_80px_rgba(15,23,42,0.28)] min-h-screen">
            </section>
        </div>
    );
}