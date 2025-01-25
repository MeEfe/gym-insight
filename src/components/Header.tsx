import { useState, useEffect } from "react";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-[#0D1821]/90 backdrop-blur-sm" : ""
			}`}
		>
			<nav className="container mx-auto px-6 py-4 flex justify-between items-center">
				<a href="/" className="text-2xl font-bold">
					GymTech
				</a>
				<ul className="flex space-x-6">
					{["Home", "Features", "Pricing", "Contact"].map((item) => (
						<li key={item}>
							<a
								href={`#${item.toLowerCase()}`}
								className="hover:text-[#256EFF] transition-colors"
							>
								{item}
							</a>
						</li>
					))}
					<li>
						<a
							href="/login"
							className="hover:text-[#256EFF] transition-colors"
						>
							Login
						</a>
					</li>
				</ul>
				<button className="bg-[#256EFF] text-white px-4 py-2 rounded hover:bg-[#256EFF]/80 transition-colors">
					Get Started
				</button>
			</nav>
		</header>
	);
}
