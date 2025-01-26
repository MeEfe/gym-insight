import { useRef } from "react";
import styles from "./Hero.module.scss";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Header from "../Header/Header";

export default function Hero() {
	const alignCenter = { display: "flex", alignItems: "center" };
	const parallax = useRef<IParallax>(null!);

	return (
		<>
			<Parallax ref={parallax} pages={3}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className={styles.initContainer}>
						<Header />
						<div className={styles.initPage}>
							<div className={styles.headLine}>
								<h2>Revolutionize your gym experience</h2>
								<p>
									Track gym equipment, monitor gym occupancy
									and enhance your workout gym
								</p>
							</div>
							<svg
								width="50px"
								height="50px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 4V20M12 20L8 16M12 20L16 16"
									stroke="#c2e0ff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{
						...alignCenter,
						backgroundColor: "#e0e0e0",
					}}
				>
					<div className={styles.content}>
						<h1>Discover Page 2</h1>
						<p>Here is some more content on the second page.</p>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{
						...alignCenter,
						backgroundColor: "#cccccc",
					}}
				>
					<div className={styles.content}>
						<h1>Explore Page 3</h1>
						<p>
							This is the final section of the full-page scroll.
						</p>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}
