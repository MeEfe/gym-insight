import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Header.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../../assets/logo.svg";

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
					<img src={Logo} alt="logo" />
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
