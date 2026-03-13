import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Lodging&Dining", path: "/lodging-dining" },
    { name: "Transit", path: "/transit" },
    { name: "Planning", path: "/planning" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `hover:text-yellow-400 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : ''}`;

    return (
        <nav className="bg-teal-700 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <NavLink to="/" className="text-xl font-bold tracking-wide">
            Taniti
            </NavLink>

            <ul className="hidden md:flex gap-6">
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
            <ul className="md:hidden mt-3 flex flex-col gap-3 px-2">
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
