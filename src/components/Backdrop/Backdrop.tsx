import { MouseEventHandler } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Backdrop.module.scss";

export default function Backdrop(props: {
	show: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	const backdropAnimation = useSpring({
		opacity: props.show ? 1 : 0,
		config: { tension: 220, friction: 20 },
	});

	return (
		<animated.div
			style={backdropAnimation}
			className={`${styles.backdrop} ${props.show ? styles.visible : ""}`}
			onClick={props.onClick}
		/>
	);
}
