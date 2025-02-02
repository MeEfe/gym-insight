import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../Header/Header";
import CustomerFeedbackCarousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Logo from "../../assets/logo.png";
import ArrowDown from "../../assets/arrow-down.svg";

export default function Hero() {
	const alignCenter = { display: "flex", alignItems: "center" };
	const parallax = useRef<IParallax>(null!);

	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = () => {
		if (parallax.current) {
			const container = parallax.current.container.current;
			const totalScrollHeight =
				container.scrollHeight - container.clientHeight;
			const currentScroll = container.scrollTop;
			const progress = (currentScroll / totalScrollHeight) * 100;
			setScrollProgress(progress);
		}
	};

	useEffect(() => {
		const container = parallax.current.container.current;
		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className={styles.progressBarContainer}>
				<div
					className={styles.progressBar}
					style={{ height: `${scrollProgress}%` }}
				/>
			</div>
			<Parallax ref={parallax} pages={7}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.initContainer}>
						<Header />
						<div className={styles.initPage}>
							<div className={styles.headLineContainer}>
								<img src={Logo} alt="logo" />
								<h1 id={styles.headline}>
									Revolutionize your
									<span className={styles.highlight}>
										gym experience
									</span>
								</h1>
								<p id={styles.subtitle}>
									Track gym equipment, monitor gym occupancy
									and enhance your workout gym
								</p>
							</div>
							<img
								id={styles.arrowDown}
								src={ArrowDown}
								alt="arrowDown"
							/>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1, end: 5 }}
					style={{
						...alignCenter,
						justifyContent: "flex-start",
						alignItems: "start",
					}}
				>
					<div className={styles.cardContainer}>
						<h2 className={styles.storyTitle}>
							What we have to offer
						</h2>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					style={{
						...alignCenter,
						justifyContent: "flex-end",
						alignItems: "start",
					}}
				>
					<div className={`${styles.cardContainer} ${styles.start}`}>
						<h2
							className={`${styles.storyTitle} ${styles.informationTitle}`}
						>
							#001 Efficiency
						</h2>
						<p className={styles.informationParagraph}>
							Maximize your gym’s potential with real-time
							tracking and data-driven insights. Our solution
							helps gym owners optimize space, manage equipment
							utilization, and ensure a seamless experience for
							gym goers. Stay ahead with precise analytics that
							enhance operational efficiency and member
							satisfaction.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={1}
					style={{
						...alignCenter,
						justifyContent: "flex-end",
						alignItems: "start",
					}}
				>
					<div className={`${styles.cardContainer} ${styles.start}`}>
						<h2
							className={`${styles.storyTitle} ${styles.informationTitle}`}
						>
							#002 Smart Utilization
						</h2>
						<p className={styles.informationParagraph}>
							Optimize your gym space like never before. Our
							advanced tracking technology provides real-time data
							on equipment and facility usage, helping you
							identify peak hours, underutilized assets, and areas
							for improvement. Maximize efficiency and enhance the
							experience for both gym owners and members.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={1}
					style={{
						...alignCenter,
						justifyContent: "flex-end",
						alignItems: "start",
					}}
				>
					<div className={`${styles.cardContainer} ${styles.start}`}>
						<h2
							className={`${styles.storyTitle} ${styles.informationTitle}`}
						>
							#003 Empowered Decisions
						</h2>
						<p className={styles.informationParagraph}>
							Data-driven insights at your fingertips. With our
							intuitive dashboard, gym owners can make informed
							financial decisions, adjust pricing dynamically, and
							understand what equipment adds the most value to
							their business. Take control and stay ahead in a
							competitive fitness market.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={4}
					speed={1}
					style={{
						...alignCenter,
						justifyContent: "flex-end",
						alignItems: "start",
					}}
				>
					<div className={`${styles.cardContainer} ${styles.start}`}>
						<h2
							className={`${styles.storyTitle} ${styles.informationTitle}`}
						>
							#004 Seamless Experience
						</h2>
						<p className={styles.informationParagraph}>
							For gym-goers, our app provides a hassle-free way to
							plan their workouts. Check equipment availability,
							monitor gym capacity, and avoid the rush with live
							updates. Your fitness journey just got smarter, more
							efficient, and stress-free.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={5}
					speed={1}
					style={{
						...alignCenter,
						justifyContent: "flex-end",
						alignItems: "start",
					}}
				>
					<div className={`${styles.cardContainer} ${styles.start}`}>
						<h2
							className={`${styles.storyTitle} ${styles.informationTitle}`}
						>
							#005 Future of Fitness
						</h2>
						<p className={styles.informationParagraph}>
							We’re here to revolutionize the gym experience for
							both owners and members. By combining real-time data
							with expert consultation, we help gyms stay
							future-ready with actionable strategies that drive
							growth, profitability, and satisfaction. Welcome to
							the future of fitness management.
						</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={6} speed={0.5}>
					<div className={styles.pageEndContainer}>
						<CustomerFeedbackCarousel />
						<Footer />
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}
