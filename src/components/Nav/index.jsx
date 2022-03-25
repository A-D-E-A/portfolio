import styles from "./styles.module.scss";
const __styles = {};

function Nav() {
	return (
		<nav class={styles.nav}>
			<a class={styles.logolink} href="/">
				<div
					class={`${styles.monogram} terminal-prompt ${styles.terminalPrompt}`}
				>
					AA
				</div>
			</a>
			<a class={styles.link} href="/projects">
				Projects
			</a>
			<a class={styles.link} href="/skills">
				Skills
			</a>
			<a class={styles.link} href="/about">
				About
			</a>
			<a class={styles.social} href="https://gitlab.com/ADEA">
				<svg
					class={styles.socialicon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 128 128"
					width="16"
					height="16"
				>
					<path d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"></path>
				</svg>
			</a>
			<a class={styles.social} href="https://github.com/A-D-E-A">
				<svg
					class={styles.socialicon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
				>
					<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
				</svg>
			</a>
			<a
				class={styles.social}
				href="https://www.linkedin.com/in/adam-ambrosino-7a3b84129/"
			>
				<svg
					height="16"
					width="16"
					class={styles.socialicon}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 128 128"
					style="enable-background:new 0 0 128 128"
					xmlSpace="preserve"
				>
					<path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
				</svg>
			</a>
		</nav>
	);
}
export default Nav;
