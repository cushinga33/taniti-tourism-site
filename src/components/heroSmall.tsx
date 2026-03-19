import heroImage from '../assets/hero.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type HeroButton = {
	title: string;
	link: string;
};

type HeroProps = {
	image?: string;
	header?: string;
    highlight?: string;
	subheader?: string;
	buttons?: HeroButton[];
};

export default function Hero(props: HeroProps) {
	const {
		image,
		header,
		subheader,
        highlight,
		buttons,
	} = props;
	const location = useLocation();
	const navigate = useNavigate();

	const usedButtons = buttons && buttons.length > 0 ? buttons : [{ title: 'Plan Your Visit', link: '/explore' }];

	const handleButtonClick = (e: React.MouseEvent, link: string) => {
		const [pathPart, hashPart] = link.split('#');
		const targetPath = pathPart || location.pathname;
		e.preventDefault();

		if (targetPath !== location.pathname) {
			navigate(targetPath + (hashPart ? `#${hashPart}` : ''));
			// Attempt to scroll to hash after navigation completes
			if (hashPart) setTimeout(() => { const el = document.getElementById(hashPart); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 80);
			return;
		}

		if (hashPart) {
			const el = document.getElementById(hashPart);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			} else {
				// fallback: update hash so browser can try
				window.location.hash = hashPart;
			}
			return;
		}

		navigate(link);
	};

	return (
		<section data-hero="heroSmall" className="fixed inset-0 flex h-[60vh] min-w-full items-center justify-center overflow-hidden">
			<img
				src={image ?? heroImage}
				alt="Island View"
				className="absolute inset-0 h-full w-full object-cover saturate-150 brightness-75"
				decoding="async"
			/>
			<div
				className="absolute inset-0 h-full pointer-events-none bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.3)_22%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0.28)_76%,rgba(0,0,0,0.72)_100%)]"
				aria-hidden="true"
			/>
			<div className="absolute top-10 z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 h-[60vh] justify-center text-center">
				<h1 className="font-body mb-4 text-4xl font-bold leading-[1.15] tracking-wide text-white sm:text-5xl md:text-6xl">					
					{header} <span className="inline-block pb-[0.08em] bg-[linear-gradient(135deg,#fff3b0_0%,#ffe066_22%,#ffcf33_48%,#ffb703_72%,#fb8500_100%)] bg-clip-text text-transparent">{highlight}</span>
				</h1>
				<h2 className="font-body mt-4 text-lg text-white sm:text-xl md:text-2xl">
					{subheader}
				</h2>

				<div className="my-8 w-full flex justify-center items-center">
					<div className="flex gap-6 flex-wrap justify-center">
						{usedButtons.map((b, i) => {
							const isHash = b.link.includes('#');
							return isHash ? (
								<a
									key={i}
									href={b.link}
									onClick={(e) => handleButtonClick(e, b.link)}
									className="mt-8 rounded-xl bg-[#00AAFF] px-8 py-3 text-lg font-semibold hidden md:inline-block text-white tracking-wide transition-transform shadow-lg duration-300 hover:-translate-y-1 hover:brightness-105"
								>
									{b.title}
								</a>
							) : (
								<Link
									key={i}
									to={b.link}
									className="mt-8 rounded-xl bg-[#00AAFF] px-8 py-3 text-lg font-semibold text-white tracking-wide transition-transform shadow-lg duration-300 hover:-translate-y-1 hover:brightness-105"
								>
									{b.title}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
