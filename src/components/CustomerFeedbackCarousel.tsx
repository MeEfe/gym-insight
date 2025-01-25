import { useRef, useEffect } from "react";

const testimonials = [
	{
		name: "John Doe",
		role: "Gym Owner",
		avatar: "/avatars/john-doe.jpg",
		rating: 5,
		text: "This app has completely transformed the way I manage my gym!",
	},
	{
		name: "Jane Smith",
		role: "Fitness Enthusiast",
		avatar: "/avatars/jane-smith.jpg",
		rating: 4,
		text: "I love being able to check gym occupancy before I go. It saves me so much time!",
	},
	{
		name: "Mike Johnson",
		role: "Personal Trainer",
		avatar: "/avatars/mike-johnson.jpg",
		rating: 5,
		text: "The equipment tracking feature is a game-changer for planning client workouts.",
	},
	{
		name: "Sarah Lee",
		role: "Yoga Instructor",
		avatar: "/avatars/sarah-lee.jpg",
		rating: 5,
		text: "The class scheduling system has made my life so much easier. Highly recommended!",
	},
	{
		name: "Tom Wilson",
		role: "Gym Member",
		avatar: "/avatars/tom-wilson.jpg",
		rating: 4,
		text: "I appreciate how easy it is to book classes and track my progress. Great app!",
	},
];

export default function CustomerFeedbackCarousel() {
	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const scrollWidth = carousel.scrollWidth;
		const clientWidth = carousel.clientWidth;

		let scrollPosition = 0;
		const scrollSpeed = 0.5; // Pixels per frame

		const animate = () => {
			scrollPosition += scrollSpeed;
			if (scrollPosition >= scrollWidth / 2) {
				scrollPosition = 0;
			}
			carousel.scrollLeft = scrollPosition;
			requestAnimationFrame(animate);
		};

		const animationId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationId);
	}, []);

	const doubledTestimonials = [...testimonials, ...testimonials];

	return (
		<section className="py-20 bg-gradient-to-b from-[#0D1821] to-[#1A2A3A] overflow-hidden">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-12">
					What Our Users Say
				</h2>
				<div
					ref={carouselRef}
					className="flex overflow-x-hidden"
					style={{ WebkitOverflowScrolling: "touch" }}
				>
					<div className="flex animate-carousel">
						{doubledTestimonials.map((testimonial, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-80 mx-4"
							>
								<div className="bg-[#1E2A3A] p-6 rounded-lg shadow-lg h-full flex flex-col">
									<div className="flex items-center mb-4">
										<div>
											<h3 className="font-bold">
												{testimonial.name}
											</h3>
											<p className="text-sm text-gray-400">
												{testimonial.role}
											</p>
										</div>
									</div>
									<div className="flex mb-2">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-5 h-5 ${
													i < testimonial.rating
														? "text-[#256EFF]"
														: "text-gray-400"
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className="text-gray-300 flex-grow">
										{testimonial.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
