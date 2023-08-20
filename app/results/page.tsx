"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link"
import RequireDesktop from "@/components/desktop";

const companies = [
  {
    name: "Envato Elements",
    type: "Corporate",
    position: "Front End Web Developer",
    description:
      "We are seeking a talented and motivated Front-End Web Developer with strong expertise in...",
    languages: ["HTML", "CSS", "React.js"],
    logo: "/envato_elements.png", // Logo URL
    email: "hello@envato.com",
    company_interested: true,
  },
  {
    name: "TechCo Solutions",
    type: "Startup",
    position: "Full Stack Developer",
    description:
      "Join our dynamic startup team as a Full Stack Developer and help us build amazing products.",
    languages: ["JS", "Node.js", "MongoDB"],
    logo: "/techco_solutions.png", // Logo URL
    email: "hello@tech.co",
    company_interested: false,
  },
  {
    name: "Revlo Corp",
    type: "Startup",
    position: "Full Stack Developer",
    description:
      "Join our dynamic startup team as a Full Stack Developer and help us build amazing products.",
    languages: ["JS", "Node.js", "MongoDB"],
    logo: "/revlo.png", // Logo URL
    email: "info@revlo.com",
    company_interested: false,
  },
  // Add more company cards
];

export default function Results() {
  const handleCopyEmail = (email: string) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copied to clipboard:", email);
      })
      .catch((error) => {
        console.error("Error copying email:", error);
      });
  };
  return (
    <>
      <div className={styles.desktop}><RequireDesktop /></div>
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
            <Link href='/'>
              <Image
                src="/oppur-logo.png"
                alt="Logo"
                width={150}
                height={30}
                className={styles.logo}
              />
            </Link>

            <Image
              src="/profile.png"
              alt="Logo"
              width={38}
              height={38}
              className={styles.logo}
            />
          </nav>
        </header>
        <div className={styles.wrapper} style={{ alignItems: 'center' }}>
          <p style={{ color: '#DBDBDB', marginBottom: '-15px' }}>hint: click to copy email</p>
          <div className={styles.card_wrapper}>
            {companies.map((company, index) => (
              <div
                className={styles.copyEmailButton}
                onClick={() => handleCopyEmail(company.email)}
                key={index}
              >
                <div
                  className={`${styles.card} ${!company.company_interested ? styles["not-interested"] : ""
                    }`}
                  key={index}
                >
                  <div className={styles.inner_wrapper}>
                    <div className={styles.company_container}>
                      <div className={styles.company}>
                        <Image
                          src={company.logo}
                          width={40}
                          height={40}
                          alt={company.name}
                        />
                        <div className={styles.company_title}>
                          <p
                            className={styles.company_title}
                            style={{
                              color: company.company_interested
                                ? "#212840"
                                : "#5A5C65",
                            }}
                          >
                            {company.name}
                          </p>
                          <p
                            className={styles.company_type}
                            style={{
                              color: company.company_interested
                                ? "#212840"
                                : "#5A5C65",
                            }}
                          >
                            {company.type}
                          </p>
                        </div>
                      </div>
                      {company.company_interested ? (
                        <Image
                          src="/checkmark.svg" // Path to checkmark SVG
                          width={30}
                          height={30}
                          alt="Checkmark"
                        />
                      ) : (
                        <Image
                          src="/cross.svg" // Path to cross SVG
                          width={30}
                          height={30}
                          alt="Cross"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
