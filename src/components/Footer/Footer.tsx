import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.column}>
						<h3>GymInsight</h3>
						<ul>
							<li>
								<a href="#efficiency">Efficiency</a>
							</li>
							<li>
								<a href="#smart-utilization">
									Smart utilization
								</a>
							</li>
							<li>
								<a href="#empowered-decisions">
									Empowererd Decisions
								</a>
							</li>
							<li>
								<a href="#seamless-experience">
									Seamless Experience
								</a>
							</li>
							<li>
								<a href="#future">Future of Fitness</a>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h4>Legal</h4>
						<ul>
							<li>
								<a href="/privacy">Privacy Policy</a>
							</li>
							<li>
								<a href="/terms">Terms of Service</a>
							</li>
						</ul>
					</div>
					<div className={styles.column}>
						<h4>Contact</h4>
						<ul>
							<li>
								<p>Email: info@gyminsight.com</p>
							</li>
							<li>
								<p>Phone: (123) 456-7890</p>
							</li>
							<li>
								<p>Address: Insight Avenue 1</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.bottomText}>
					<p>&copy; 2025 GymInsight. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
