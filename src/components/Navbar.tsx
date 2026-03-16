import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Lodging and Dining", path: "/lodging-dining" },
    { name: "Transit", path: "/transit" },
    { name: "Planning", path: "/planning" },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [hasSolidBackground, setHasSolidBackground] = useState(pathname !== "/");

    useEffect(() => {
        const updateNavbarState = () => {
            if (pathname !== "/") {
                setHasSolidBackground(true);
                return;
            }

            const heroTransitionPoint = Math.max(window.innerHeight - 260, 120);
            setHasSolidBackground(window.scrollY >= heroTransitionPoint);
        };

        updateNavbarState();
        window.addEventListener("scroll", updateNavbarState, { passive: true });
        window.addEventListener("resize", updateNavbarState);

        return () => {
            window.removeEventListener("scroll", updateNavbarState);
            window.removeEventListener("resize", updateNavbarState);
        };
    }, [pathname]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `hover:text-yellow-400 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : ''}`;

    return (
        <nav
            className={`fixed top-0 z-[100] w-full px-6 py-4 text-white transition-all duration-300 ${
                hasSolidBackground
                    ? 'bg-[#00AAFF]/95 backdrop-blur-sm rounded-b-2xl'
                    : 'bg-transparent bg-gradient-to-b from-black/50 to-transparent '
            }`}
        >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <NavLink to="/" className="text-xl font-bold tracking-wide">
            Taniti
            </NavLink>

            <ul className="hidden md:flex gap-12">
            {links.map(({ name, path }) => (
                <li key={path}>
                <NavLink to={path} className={navLinkClass} end={path === '/'}>
                    {name}
                </NavLink>
                </li>
            ))}
            </ul>

            <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            >
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white mb-1" />
            <span className="block w-6 h-0.5 bg-white" />
            </button>
        </div>

        {isOpen && (
            <ul className={`mt-3 flex flex-col gap-3 rounded-2xl px-4 py-4 md:hidden ${hasSolidBackground ? 'bg-[#0a456a]/95' : 'bg-black/35 backdrop-blur-md'}`}>
            {links.map(({ name, path }) => (
                <li key={path}>
                <NavLink
                    to={path}
                    className={navLinkClass}
                    end={path === '/'}
                    onClick={() => setIsOpen(false)}
                >
                    {name}
                </NavLink>
                </li>
            ))}
            </ul>
        )}
        </nav>
    );
}
