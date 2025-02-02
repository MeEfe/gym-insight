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
						<a href="#efficiency">Efficiency</a>
					</li>
					<li>
						<a href="#smart-utilization">Smart utilization</a>
					</li>
					<li>
						<a href="#empowered-decisions">Empowererd Decisions</a>
					</li>
					<li>
						<a href="#seamless-experience">Seamless Experience</a>
					</li>
					<li>
						<a href="#future">Future of Fitness</a>
					</li>
					<li>
						<button className={styles.demoBtn}>Request demo</button>
					</li>
				</ul>
			</nav>
		</animated.div>
	);
}
