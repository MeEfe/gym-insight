import Hero from "./components/Hero/Hero";
import styles from "./App.module.scss";

function App() {
	return (
		<div className={styles.pageContainer}>
			<Hero />
		</div>
	);
}

export default App;
