"use client";

import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import { signInWithGoogle } from "@/backend/login";
import LoadingContext from "@/context/LoadingContext";


export default function LoginPage() {

    let normal = '#0D0D0D';
    const [bgColor, setBgColor] = useState(normal);
     const changeColor =()=>{
        console.log('hello')
        let white = '#DBDBDB';
        setBgColor(white);
      }

  const user = useContext(UserContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);

  if (user) {
    window.location.href = "/";
    return;
  }

  return (
    <div className={styles.mobile}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>HTML</p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>CSS</p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>JS</p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>Python</p>
              </button>
            </div>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
            >
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>
                  Next.js
                </p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>
                  Typescript
                </p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>PHP</p>
              </button>
              <button className={styles.skill} onClick={changeColor}>
                <p style={{ fontSize: "15px", width: "fit-content" }}>C++</p>
              </button>
            </div>
          </div>
          <div className={styles.card}>
              <p className={styles.info}>Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
