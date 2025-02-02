import { useRef } from "react";
import {
	motion,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import styles from "./Parallax.module.scss";

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({
	id,
	title,
	text,
}: {
	id: number;
	title: string;
	text: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({ target: ref });

	const y = useParallax(scrollYProgress, 300);

	return (
		<section className={styles.section}>
			<div className={styles.sectionContent} ref={ref}>
				<motion.h2
					className={styles.title}
					initial={{ visibility: "hidden" }}
					animate={{ visibility: "visible" }}
					style={{ y }}
				>
					{title}
				</motion.h2>

				<p className={styles.text}>{text}</p>
			</div>
		</section>
	);
}

export default function Parallax() {
	const { scrollYProgress } = useScroll();
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const sections = [
		{
			id: 1,
			title: "Section 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "Section 2",
			text: "Aliquam at porttitor sem. Aliquam erat volutpat.",
		},
		{
			id: 3,
			title: "Section 3",
			text: "Donec placerat, metus sed hendrerit hendrerit.",
		},
		{
			id: 4,
			title: "Section 4",
			text: "Pellentesque in metus eu tortor bibendum aliquet.",
		},
		{
			id: 5,
			title: "Section 5",
			text: "Mauris lobortis nec quam id iaculis.",
		},
	];

	return (
		<div className={styles.container}>
			{sections.map(({ id, title, text }) => (
				<Section key={id} id={id} title={title} text={text} />
			))}

			<motion.div className={styles.progress} style={{ scaleY }} />
		</div>
	);
}
