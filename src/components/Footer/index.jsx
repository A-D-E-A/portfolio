import styles from "./styles.module.scss";
const __styles = {};

function Footer() {
	return (
		<footer class={styles.footer}>
			&copy; {new Date().getFullYear()} Adam Ambrosino
			<small class={styles.byline}>🚀 Built with Astro</small>
		</footer>
	);
}

export default Footer;
