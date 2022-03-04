import styles from "./styles.module.scss";
const __styles = {};

function PortfolioPreview({ project }) {
	return (
		<div class={styles.card}>
			<div
				class={styles.titleCard}
				style={`background-image:url(${project.img})`}
			>
				<h1 class={styles.title}>{project.title}</h1>
			</div>
			<div class="pa3">
				<p class={`${styles.desc} mt0 mb2`}>{project.description}</p>
				<div class={styles.tags}>
					Tagged:
					{project.tags.map((t) => (
						<div class={styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a class={styles.link} href={project.url}>
					<span class={styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
