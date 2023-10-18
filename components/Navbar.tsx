"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import Link from 'next/link'
import '../styles/globals.css'

const Navbar = () => {

	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenu = () => {
		setMenuVisible(!menuVisible);
		console.log(menuVisible);
	};


	return (
		<div className={`${styles.container} ${menuVisible ? styles.blurred : ''}`}>
			<div className={styles.mainContainer}>
				<div>
					<div className={styles.logo}>
						<Link href="/">
							<img className={styles.image} src="/PCSI - logo.png" />
						</Link>
					</div>
				</div>
				<div className={styles.tabs}>
					<Link href="/about">
						<button className={styles.tabBtn}>O nas</button>
					</Link>
					<Link href="/projects">
						<button className={styles.tabBtn}>Projekty</button>
					</Link>
					<Link href="/education">
						<button className={styles.tabBtn}>Edukacja</button>
					</Link>
					<Link href="/volunteer">
						<button className={styles.tabBtn} id={styles.btn1}>Wolontariat</button>
					</Link>
				</div>
				<div className={styles.login}>
					<button className={styles.loginBtn}>Login</button>
					<button className={styles.registerBtn}>Register</button>
				</div>
				<button className={styles.menuBtn} onClick={toggleMenu}>
					<img className={styles.menuImg} src="/bars-solid.png" />
				</button>
			</div>
			<div>
				{menuVisible && <ul className={styles.menuList}>
					<Link href="/about">
						<li className={styles.listElement}>O nas</li>
					</Link>
					<Link href="/projects">
						<li className={styles.listElement}>Projekty</li>
					</Link>
					<Link href="/education">
						<li className={styles.listElement}>Edukacja</li>
					</Link>
					<Link href="/volunteer">
						<li className={styles.listElement}>Wolontariat</li>
					</Link>
				</ul>
				}
			</div>
		</div>
		);
};

export default Navbar;

