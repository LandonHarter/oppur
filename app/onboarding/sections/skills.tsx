'use client'

import React, { useContext, useState } from "react";
import styles from "../styles.module.css";
import Image from "next/image";

export default function OnboardingSkills(props: { nextSection: Function }) {
    const [skills, setSkills] = useState([
        {
            name: "HTML",
            selected: false,
            backgroundColor: "#F16529",
            textColor: "#FFFFFF",
        },
        {
            name: "CSS",
            selected: false,
            backgroundColor: "#2965F1",
            textColor: "#FFFFFF",
        },
        {
            name: "JavaScript",
            selected: false,
            backgroundColor: "#F0DB4F",
            textColor: "#000000",
        },
        {
            name: "TypeScript",
            selected: false,
            backgroundColor: "#007ACC",
            textColor: "#FFFFFF",
        },
        {
            name: "Python",
            selected: false,
            backgroundColor: "#3776AB",
            textColor: "#FFFFFF",
        },
        {
            name: "Java",
            selected: false,
            backgroundColor: "#007396",
            textColor: "#FFFFFF",
        },
        {
            name: "C++",
            selected: false,
            backgroundColor: "#00599C",
            textColor: "#FFFFFF",
        },
        {
            name: "C#",
            selected: false,
            backgroundColor: "#5C2D91",
            textColor: "#FFFFFF",
        },
    ]);

    function toggleSkill(index: number) {
        const newSkills = [...skills];
        newSkills[index].selected = !newSkills[index].selected;
        setSkills(newSkills);
    }

    return (
        <>
            <header>
                <nav>
                    <a href="/">
                        <Image src="/left-arrow.svg" alt="Back" width={30} height={30} />
                    </a>
                </nav>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.flex}>
                    <div className={styles.top}>
                        <Image src="/onboarding.svg" width={250} height={150} alt="Login" />
                        <div className={styles.topBottom}>
                            <p
                                style={{
                                    fontFamily: "Inter Regular",
                                    fontSize: "10px",
                                    color: "#ABABAB",
                                }}
                            >
                                SELECT ALL THAT APPLY
                            </p>
                            <p style={{ fontFamily: "Inter Bold" }}>
                                Which of the following languages do you know?
                            </p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                maxWidth: '80vw',
                                gap: "8px",
                            }}
                        >
                            {skills.map((skill, index) => {
                                return (
                                    <button className={`${styles.skill} ${skill.selected && styles.skill_selected}`} style={{
                                        backgroundColor: skill.selected ? skill.backgroundColor : "var(--bg500)",
                                    }} onClick={() => toggleSkill(index)} key={index}>
                                        <p style={{ fontSize: "15px", width: "fit-content", color: skill.selected ? skill.textColor : "var(--text500)" }}>{skill.name}</p>
                                    </button>
                                );
                            })}
                        </div>
                        <div className={styles.card} onClick={() => {
                            props.nextSection('');
                        }}>
                            <p className={styles.info}>Continue</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}