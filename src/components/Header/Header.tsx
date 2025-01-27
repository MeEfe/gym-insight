import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Header.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Backdrop from "../Backdrop/Backdrop";

export default function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const hamburgerAnimation = useSpring({
		transform: sidebarVisible ? `translateX(300px)` : `translateX(0%)`,
		opacity: sidebarVisible ? 0 : 1,
		config: { tension: 220, friction: 20 },
	});

	useEffect(() => {
		if (sidebarVisible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [sidebarVisible]);

	useEffect(() => {
		const handleKeyDown = (e: any) => {
			if (e.key === "Escape" && sidebarVisible) {
				setSidebarVisible(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [sidebarVisible]);

	useEffect(() => {
		const handleScrollAttempt = () => {
			if (sidebarVisible) {
				setSidebarVisible(false);
			}
		};

		if (sidebarVisible) {
			window.addEventListener("wheel", handleScrollAttempt);
			window.addEventListener("touchmove", handleScrollAttempt);
		}

		return () => {
			window.removeEventListener("wheel", handleScrollAttempt);
			window.removeEventListener("touchmove", handleScrollAttempt);
		};
	}, [sidebarVisible]);

	return (
		<>
			<Backdrop
				show={sidebarVisible}
				onClick={() => setSidebarVisible(false)}
			/>

			<Sidebar
				show={sidebarVisible}
				onClose={() => setSidebarVisible(false)}
			/>

			<div className={styles.headerContainer}>
				<div className={styles.logoContainer}>
					<svg
						width="50px"
						height="50px"
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1233.24 833.9"
					>
						<g>
							<path
								fill="#c2e0ff"
								strokeWidth="0"
								d="M1192.16,261.9c-2.63-2.68-65.66-66.52-167.54-130.8C888.68,45.34,747.59,0,616.62,0S344.56,45.34,208.62,131.11C106.73,195.39,43.71,259.22,41.08,261.9c-13.75,14.03-13.75,36.48,0,50.5,2.63,2.69,65.66,66.52,167.54,130.8,135.95,85.77,277.03,131.11,408,131.11s272.06-45.34,408-131.11c101.89-64.28,164.91-128.11,167.54-130.8,13.75-14.02,13.75-36.48,0-50.5ZM984.59,383.16c-86.4,54.29-220.38,119.01-367.97,119.01s-281.57-64.72-367.97-119.01c-57.5-36.13-102.25-72.63-128.82-96,26.57-23.38,71.32-59.88,128.82-96,86.4-54.29,220.38-119.01,367.97-119.01s281.57,64.72,367.97,119.01c57.51,36.13,102.26,72.63,128.81,96-26.56,23.38-71.31,59.88-128.81,96Z"
							/>
							<circle
								fill="none"
								stroke="#c2e0ff"
								strokeWidth="54"
								strokeMiterlimit="10"
								cx="616.62"
								cy="290.87"
								r="238.98"
							/>
							<g>
								<g>
									<rect
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										x="675.4"
										y="201.47"
										width="43.38"
										height="171.36"
										rx="7.39"
										ry="7.39"
									/>
									<rect
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										x="718.77"
										y="216.66"
										width="43.38"
										height="140.98"
										rx="6.71"
										ry="6.71"
									/>
									<path
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										d="M767.5,242.33h32.68c2.95,0,5.35,2.4,5.35,5.35v78.96c0,2.95-2.4,5.35-5.35,5.35h-32.68c-2.95,0-5.35-2.4-5.35-5.35v-78.96c0-2.95,2.4-5.35,5.35-5.35Z"
									/>
								</g>
								<g>
									<rect
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										x="514.47"
										y="201.47"
										width="43.38"
										height="171.36"
										rx="7.39"
										ry="7.39"
										transform="translate(1072.31 574.31) rotate(180)"
									/>
									<rect
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										x="471.09"
										y="216.66"
										width="43.38"
										height="140.98"
										rx="6.71"
										ry="6.71"
										transform="translate(985.56 574.31) rotate(180)"
									/>
									<rect
										fill="#c2e0ff"
										stroke="#c2e0ff"
										strokeWidth="4.23"
										strokeMiterlimit="10"
										x="427.71"
										y="242.33"
										width="43.38"
										height="89.65"
										rx="5.35"
										ry="5.35"
										transform="translate(898.81 574.31) rotate(180)"
									/>
								</g>
								<rect
									fill="#c2e0ff"
									stroke="#c2e0ff"
									strokeWidth="4.23"
									strokeMiterlimit="10"
									x="557.85"
									y="268.71"
									width="117.55"
									height="36.9"
								/>
							</g>
						</g>
					</svg>
					<h1 className={styles.title}>GymInsight</h1>
				</div>

				<animated.svg
					onClick={() => setSidebarVisible((visible) => !visible)}
					style={hamburgerAnimation}
					className={styles.hamburger}
					width="50px"
					height="50px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20 7L4 7"
						stroke="#c2e0ff"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M20 12L4 12"
						stroke="#c2e0ff"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
					<path
						d="M20 17L4 17"
						stroke="#c2e0ff"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</animated.svg>
			</div>
		</>
	);
}
