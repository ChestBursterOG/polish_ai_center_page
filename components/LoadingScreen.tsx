import Image from 'next/image'
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
	

	return (
		<div className={styles.mainContainer}>
			<div className={styles.layers}>
				<div className={styles.glow} />
				<div className={styles.imgContainer}>
					<img className={styles.image} src="/CPU-lightnings.gif" />
				</div>
			</div>
			<div className={styles.title}>
				<p>Ładowanie...</p>
			</div>

		</div>
		);
};

export default LoadingScreen;

