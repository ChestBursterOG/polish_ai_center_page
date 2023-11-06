"use client";

import React from 'react';
import {useState, useEffect} from 'react';
import styles from './ProjectsSubContainer.module.css';
import axios from 'axios';

const SubContainer = ({key, title, description, link}) => {


    return (
            <div className={styles.subContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.image} src={link} />
                </div>
                <div className={styles.description}>
                    <p className={styles.pTitle}>{title}</p>
                    <p className={styles.pDescription}>{description}</p>
                </div>
            </div>
    );
}

export default SubContainer;
