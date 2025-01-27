import { useSpring, animated } from "@react-spring/web";
import styles from "./Sidebar.module.scss";
import { MouseEventHandler } from "react";

export default function Sidebar(props: {
	show: boolean;
	onClose: MouseEventHandler<HTMLButtonElement>;
}) {
	const sidebarAnimation = useSpring({
		transform: props.show ? `translateX(0%)` : `translateX(100%)`,
		opacity: props.show ? 1 : 0,
		config: { tension: 220, friction: 20 },
	});

	return (
		<animated.div style={sidebarAnimation} className={styles.sidebar}>
			<button className={styles.closeButton} onClick={props.onClose}>
				&times;
			</button>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#pricing">Pricing</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</animated.div>
	);
}
