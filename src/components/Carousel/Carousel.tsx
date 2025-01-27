import { useRef } from "react";
import styles from "./Carousel.module.scss";

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
	const doubledTestimonials = [...testimonials, ...testimonials];
	const carouselRef = useRef<HTMLDivElement>(null);

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>What Our Users Say</h2>
				<div ref={carouselRef} className={styles.carouselWrapper}>
					<div className={styles.carouselInner}>
						{doubledTestimonials.map((testimonial, index) => (
							<div key={index} className={styles.testimonial}>
								<div className={styles.testimonialInner}>
									<div className={styles.header}>
										<div>
											<h3 className={styles.name}>
												{testimonial.name}
											</h3>
											<p className={styles.role}>
												{testimonial.role}
											</p>
										</div>
									</div>
									<div className={styles.rating}>
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`${styles.star} ${
													i < testimonial.rating
														? styles.starFilled
														: styles.starEmpty
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className={styles.text}>
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
