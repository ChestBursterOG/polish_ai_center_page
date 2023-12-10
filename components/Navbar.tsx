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
		<div className={styles.superContainer}>
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
							<button className={styles.tabBtn} id={styles.btn1}>Szkolenia</button>
						</Link>
						<Link href="/encourage">
							<button className={styles.tabBtn} id={styles.btn2}>Dołącz do nas</button>
						</Link>
						<Link href="/volunteer">
							<button className={styles.tabBtn} >Kontakt</button>
						</Link>
						<Link href="/join">
							<button className={styles.tabBtn} id={styles.btn1}>Rekrutacja</button>
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
							<li className={styles.listElement}>Szkolenia</li>
						</Link>
						<Link href="/encourage">
							<li className={styles.listElement}>Dołącz do nas</li>
						</Link>
						<Link href="/volunteer">
							<li className={styles.listElement}>Kontakt</li>
						</Link>
						<Link href="/join">
							<li className={styles.listElement}>Rekrutacja</li>
						</Link>
					</ul>
					}
				</div>
			</div>
		</div>
		);
};

export default Navbar;

