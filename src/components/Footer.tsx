import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navSections = [
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

export default function Footer() {
    return (
        <footer className="bg-[#00AAFF] text-white pt-14 pb-8 px-6 z-50 relative">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
                {/* Brand column */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
                    <Link to="/" className="text-2xl font-bold tracking-wide text-white">
                        Taniti
                    </Link>
                    <p className="text-sm text-blue-100 leading-relaxed">
                       From active volcanoes to serene bays, Taniti offers an unforgettable journey for every traveler.
                    </p>
                </div>

                {/* Page / section columns */}
                {navSections.map(({ label, path, sections }) => (
                    <div key={label} className="flex flex-col gap-3">
                        <Link
                            to={path}
                            className="text-sm font-semibold uppercase tracking-widest text-[#ffcf33] hover:text-white transition-colors"
                        >
                            {label}
                        </Link>
                        <ul className="flex flex-col gap-2">
                            {sections.map(({ label: sLabel, hash }) => (
                                <li key={sLabel}>
                                    <HashLink
                                        to={`${path}${hash}`}
                                        smooth
                                        className="text-sm text-blue-100 hover:text-white transition-colors"
                                    >
                                        {sLabel}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/35 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-100">
                <span>© {new Date().getFullYear()} Taniti Tourism. All rights reserved.</span>
                <Link to="/" className="hover:text-white transition-colors">
                    Back to Home
                </Link>
            </div>
        </footer>
    );
}
