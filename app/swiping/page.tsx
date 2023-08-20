"use client";

import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import { signInWithGoogle } from "@/backend/login";
import LoadingContext from "@/context/LoadingContext";

export default function Swiping() {
  return (
    <div className={styles.mobile}>
      <Image
        src="/bg.png"
        alt="background"
        width={500}
        height={300}
        className={styles.background}
      />
      <header>
        <nav>
          <Image
            src="/oppur-logo.png"
            alt="Logo"
            width={150}
            height={30}
            className={styles.logo}
          />
          <Image
            src="/profile.png"
            alt="Logo"
            width={38}
            height={38}
            className={styles.logo}
          />
        </nav>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.inner_wrapper}>
            <div className={styles.company_container}>
              <div className={styles.company}>
                <Image
                  src="/envato_elements.png"
                  width={40}
                  height={40}
                  alt="Envato Elements"
                />
                <div className={styles.company_title}>
                  <p style={{ color: "#212840", fontFamily: "Inter Bold" }}>
                    Envato Elements
                  </p>
                  <p style={{ fontSize: "10px", color: "#ABABAB" }}>
                    Corporate
                  </p>
                </div>
              </div>
              <Image
                src="/three_dots.svg"
                width={4}
                height={20}
                alt="Three Dots"
              />
            </div>
            <h2
              style={{ fontSize: "30px", lineHeight: "40px", color: "#212840" }}
            >
              Front End Web Developer
            </h2>
            <div className={styles.more_info}>
              <p style={{ fontSize: "10px" }} id={styles.grey}>
                DESCRIPTION
              </p>
              <p id={styles.black}>
                We are seeking a talented and motivated Front-End Web Developer
                with strong expertise in...
              </p>
            </div>
            <div className={styles.more_info}>
              <p style={{ fontSize: "10px" }} id={styles.grey}>
                LANGUAGES
              </p>
              <div style={{display:'flex', flexDirection: "row", gap:'8px'}}>
                <div className={styles.language}>
                  <p id={styles.black}>HTML</p>
                </div>
                <div className={styles.language}>
                  <p id={styles.black}>CSS</p>
                </div>
                <div className={styles.language}>
                  <p id={styles.black}>React.js</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <button className={styles.pass}>
                <p>⟵ Pass</p>
              </button>
              <button className={styles.like}>
                <p>Like ⟶</p>
              </button>
            </div>
      </div>
    </div>
  );
}
