import { useRef, useEffect } from "react";

export default function ParallaxSection(props: {
	title: string;
	description: string;
	reverse?: boolean;
}) {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			const sectionPosition = section.offsetTop;
			const distance = scrollPosition - sectionPosition;
			const parallaxSpeed = 0.5;

			if (section.querySelector(".parallax-bg")) {
				section
					.querySelector(".parallax-bg")!
					.setAttribute(
						"style",
						`transform: translateY(${distance * parallaxSpeed}px)`
					);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section ref={sectionRef} className="relative h-screen overflow-hidden">
			<div className="parallax-bg absolute inset-0 z-0"></div>
			<div
				className={`relative z-10 flex items-center justify-center h-full ${
					props.reverse ? "flex-row-reverse" : ""
				}`}
			>
				<div className="w-1/2 p-12">
					<h2 className="text-4xl font-bold mb-4">{props.title}</h2>
					<p className="text-xl">{props.description}</p>
				</div>
				<div className="w-1/2 p-12">
					{/* Placeholder for interactive app mockup */}
					<div className="bg-[#256EFF]/20 h-96 rounded-lg border border-[#256EFF] flex items-center justify-center">
						Interactive App Mockup
					</div>
				</div>
			</div>
		</section>
	);
}
