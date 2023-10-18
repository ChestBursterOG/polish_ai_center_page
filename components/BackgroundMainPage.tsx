import Image from 'next/image'
import styles from './BackgroundMainPage.module.css'

const Footer = () => {


	return (
		<div className={styles.mainContainer}>
			<div className={styles.layers}>
				<div className={styles.glow} />
				<div className={styles.imgContainer}>
					<img className={styles.image} src="/CPU-lightnings.gif" />
				</div>
			</div>
		</div>
		);
};

export default Footer;

