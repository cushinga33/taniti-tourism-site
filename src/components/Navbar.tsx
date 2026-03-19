import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Lodging and Dining", path: "/lodging-dining" },
    { name: "Transit", path: "/transit" },
    { name: "Planning", path: "/planning" },
];
const mobileLinks = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Explore",
        path: "/explore",
        sections: [
            { label: "Natural Wonders", hash: "#sites" },
            { label: "Adventure Awaits", hash: "#activities" },
            { label: "Island Life", hash: "#entertainment" },
        ],
    },
    {
        label: "Lodging & Dining",
        path: "/lodging-dining",
        sections: [
            { label: "Find Your Stay", hash: "#lodging" },
            { label: "A Taste of Taniti", hash: "#dining" },
        ],
    },
    {
        label: "Transit",
        path: "/transit",
        sections: [
            { label: "Arriving in Paradise", hash: "#arriving" },
            { label: "Island Transit", hash: "#ground-transport" },
        ],
    },
    {
        label: "Planning",
        path: "/planning",
        sections: [
            { label: "Island Essentials", hash: "#essentials" },
            { label: "Health & Safety", hash: "#health-and-safety" },
            { label: "Holiday Schedule", hash: "#major-holiday-schedule" },
        ],
    },
];

const solidBackgroundRoutes = ["/", "/explore", "/lodging-dining", "/transit"];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<{ [key: string]: boolean }>({});
    const [hasSolidBackground, setHasSolidBackground] = useState(pathname !== "/");
    const heroTransitionPointRef = useRef(120);

    // Measure hero height once (on mount and resize), not on every scroll tick
    useEffect(() => {
        const measureHero = () => {
            const heroEl = document.querySelector('[data-hero]') as HTMLElement | null;
            const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight * 0.6;
            heroTransitionPointRef.current = Math.max(heroHeight - 100, 120);
        };

        measureHero();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(measureHero, 150);
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
            clearTimeout(resizeTimer);
        };
    }, [pathname]);

    useEffect(() => {
        if (!solidBackgroundRoutes.includes(pathname)) {
            setHasSolidBackground(true);
            return;
        }

        const updateNavbarState = () => {
            setHasSolidBackground(window.scrollY >= heroTransitionPointRef.current);
        };

        updateNavbarState();
        window.addEventListener("scroll", updateNavbarState, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateNavbarState);
        };
    }, [pathname]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) {
            setSubMenuOpen({});
        }
    }, [])

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `${hasSolidBackground ? 'hover:text-white' : 'hover:text-yellow-400'} transition-colors ${isActive? `${hasSolidBackground ? 'text-white font-semibold' : 'text-[#ffcf33] font-semibold'}` : `${hasSolidBackground ? 'text-[#11386c]' : 'text-white'}`}`;

    return (
        <nav
            className={`fixed top-0 z-[100] w-full px-3 md:px-6 py-4 text-white transition-[background-color,border-radius] duration-300 ${
                hasSolidBackground
                    ? 'bg-[#00AAFF] rounded-b-2xl'
                    : 'bg-transparent bg-gradient-to-b from-black/50 to-transparent '
            }`}
        >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-3 md:px-0">
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
            <ul className={`mt-3 flex flex-col gap-1 rounded-2xl px-4 py-4 md:hidden bg-gray-100`}>
            {mobileLinks.map(({ label, path, sections }) => {
                const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
                return (
                <div key={path}>
                    {sections ? (
                        <button
                            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'text-[#00AAFF] font-semibold' : 'text-gray-700 hover:text-[#00AAFF]'}`}
                            onClick={() => setSubMenuOpen(prev => ({ ...prev, [path]: !prev[path] }))}
                        >
                            {label} <span className="text-xs ml-1">{subMenuOpen[path] ? '▲' : '▼'}</span>
                        </button>
                    ) : (
                        <NavLink
                            to={path}
                            end
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'text-[#00AAFF] font-semibold' : 'text-gray-700 hover:text-[#00AAFF]'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </NavLink>
                    )}
                    {sections && (
                        <ul className={`flex flex-col gap-1 ml-4 mt-1 ${subMenuOpen[path] ? 'block' : 'hidden'}`}>
                            {sections.map(({ label: sLabel, hash }) => (
                                <li key={hash}>
                                    <HashLink
                                        to={`${path}${hash}`}
                                        className="block px-3 py-2 rounded-md text-sm text-gray-500 hover:text-[#00AAFF] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {sLabel}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                );
            })}
            </ul>
        )}
        </nav>
    );
}
