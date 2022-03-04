import styles from "./styles.module.scss";
const __styles = {};

function Button(props) {
	return <span class={styles.button}>{props.children}</span>;
}

export default Button;
