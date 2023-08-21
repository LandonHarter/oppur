'use client'

import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import styles from "./landing.module.css"; // Import your CSS module
import Link from "next/link"; // Import Link component
import { posix } from "path";
import RequireDesktop from "./components/desktop";

export default function Home() {
  const user = useContext(UserContext);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <>
      <div className={styles.desktop}><RequireDesktop /></div>
      <div className={styles.mobile}>
        <img style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: '0' }} src='/hero-bg.png' />
        <header>
          <nav className={styles.nav}>
            <Link href="/">
              <img
                src="/oppur-logo.png"
                width="160px"
                height="auto"
                style={{ position: 'relative', zIndex: 100 }}
              />
            </Link>
            <button
              id="al"
              aria-label="Hamburger Button"
              className={styles.hamburger}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <div className={styles.bar} />
            </button>
          </nav>
          <nav className={`${styles.mobile_nav} ${mobileNavOpen && styles.is_active}`}>
            <div className={styles.box}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1vh",
                }}
              >
                <Link href="/" passHref>
                  <p style={{ fontFamily: '"Inter Bold"' }}>Home</p>
                </Link>
                <Link href="/login" passHref style={{
                  color: 'var(--text500)',
                  marginTop: 20
                }}>
                  Log In
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <section className={styles.hero}>
          <div className={styles["hero-text"]} style={{ position: 'relative' }}>
            <div className={styles["hero-top"]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 9,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/academic-cap.svg" width="20px" height="auto" />
                <p className={styles.subtitle}>RAPIDLY AND EFFICIENTLY</p>
              </div>
              <h1 className={styles.main_text}>
                Pairing students with companies as interns
              </h1>
              <img
                width="125px"
                height="auto"
                style={{ marginTop: "-12px", marginLeft: "48px" }}
                src="/curved_line.svg"
              />
            </div>
            <p style={{ width: "100%", color: "#858585" }}>
              <span
                style={{
                  fontFamily: '"Inter Bold"',
                  color: "#DBDBDB",
                  fontSize: "15px",
                }}
              >
                Search for your future
              </span>{" "}
              with a swipe of your finger
            </p>
            <div className={styles["buttons-wrapper"]}>
              <Link href={user ? '/swiping' : '/login'} style={{ textDecoration: 'none' }}>
                <p
                  className={styles["sign-up-button"]}
                  style={{
                    fontFamily: '"Inter Bold"',
                    color: "#4070DB",
                    textDecoration: "none",
                  }}
                >
                  Get Started
                </p>
              </Link>
              <Link href="/login" style={{ textDecoration: 'none' }}>
                <p
                  style={{
                    fontFamily: '"Inter Bold"',
                    color: "#ABABAB",
                    textDecoration: "none",
                  }}
                >
                  Log In
                </p>
              </Link>
            </div>
          </div>
          <img src="/interning.jpg" width="100%" height="auto" className={styles.hero_image} />
        </section>
        <div
          style={{
            marginTop: 60,
            paddingBottom: 60,
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <img src="/oppur-logo.png" width="117px" />
          <p style={{ color: "#DBDBDB" }}>info@oppur.com</p>
        </div>
      </div>
    </>
  );
}
