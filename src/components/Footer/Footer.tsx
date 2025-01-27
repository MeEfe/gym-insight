import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div className={styles.column}>
						<h3>GymInsight</h3>
						<p>Revolutionizing gym experiences</p>
					</div>
					<div className={styles.column}>
						<h4>Contact</h4>
						<p>Email: info@gymtech.com</p>
						<p>Phone: (123) 456-7890</p>
						<p>Address: 123 Gym St, Fitness City</p>
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
				</div>
				<div className={styles.bottomText}>
					<p>&copy; 2025 GymInsight. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}
