import Image from 'next/image'
import styles from './Background.module.css'

const Footer = () => {


	return (
		<div className={styles.mainContainer}>
			<div className={styles.layers}>
				<div className={styles.glow} />
				<img className={styles.image} src="/CPU-lightnings.gif" />
			</div>
		</div>
		);
};

export default Footer;

