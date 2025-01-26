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

	return (
		<div
			style={{
				marginTop: "50px",
				padding: "20px 0",
				background: "#f0f0f0",
				overflow: "hidden",
				whiteSpace: "nowrap",
			}}
		>
			<div className={styles.animatedCarousel}>
				{doubledTestimonials.map((card) => (
					<div
						key={card.name}
						style={{
							display: "inline-block",
							width: "200px",
							height: "150px",
							margin: "0 10px",
							background: "white",
							borderRadius: "10px",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
							textAlign: "center",
							lineHeight: "150px",
							fontSize: "1.5rem",
						}}
					>
						Card {card.name}
					</div>
				))}

				{doubledTestimonials.map((card) => (
					<div
						key={`duplicate-${card.name}`}
						style={{
							display: "inline-block",
							width: "200px",
							height: "150px",
							margin: "0 10px",
							background: "white",
							borderRadius: "10px",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
							textAlign: "center",
							lineHeight: "150px",
							fontSize: "1.5rem",
						}}
					>
						Card {card.name}
					</div>
				))}
			</div>
		</div>
	);
}
