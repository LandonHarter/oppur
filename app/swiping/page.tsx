"use client";

import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { getJobs } from "@/backend/job";
import { Job } from "@/backend/types";
import Link from "next/link";
import TinderCard from "react-tinder-card";

const companies = [
  {
    name: "Envato Elements",
    type: "Corporate",
    position: "Front End Web Developer",
    description:
      "We are seeking a talented and motivated Front-End Web Developer with strong expertise in...",
    languages: ["HTML", "CSS", "React.js"],
    logo: "/envato_elements.png", // Logo URL
  },
  {
    name: "TechCo Solutions",
    type: "Startup",
    position: "Full Stack Developer",
    description:
      "Join our dynamic startup team as a Full Stack Developer and help us build amazing products.",
    languages: ["JS", "Node.js", "MongoDB"],
    logo: "/techco_solutions.png", // Logo URL
  },
  {
    name: "GlobalTech",
    type: "Enterprise",
    position: "Software Engineer",
    description:
      "As a Software Engineer, you will work on cutting-edge projects that impact industries worldwide.",
    languages: ["Java", "Spring", "Angular"],
    logo: "/globaltech_innovations.png", // Logo URL
  },
  // Add more company cards
];

export default function Swiping() {
  const [jobs, setJobs] = React.useState<Job[]>([]);

  useEffect(() => {
    (async () => {
      setJobs(await getJobs());
    })();
  })

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
        <nav className={styles.header_nav}>
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
            className={`${styles.logo} ${styles.avatar}`}
          />
        </nav>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.card_wrapper}>
          {jobs.map((company, index) => (
            <TinderCard preventSwipe={['up', 'down']} className={styles.card} key={index}>
              <div className={styles.inner_wrapper}>
                <div className={styles.company_container}>
                  <div className={styles.company}>
                    <Image
                      src={company.logo}
                      width={100}
                      height={100}
                      alt={company.name}
                    />
                    <div className={styles.company_title}>
                      <p
                        style={{
                          color: "#212840",
                          fontFamily: "Inter Bold",
                        }}
                      >
                        {company.name}
                      </p>
                      <p style={{ fontSize: "10px", color: "#ABABAB" }}>
                        {company.type}
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
                  style={{
                    fontSize: "30px",
                    lineHeight: "40px",
                    color: "#212840",
                  }}
                >
                  {company.name}
                </h2>
                <div className={styles.more_info}>
                  <p style={{ fontSize: "10px" }} id={styles.grey}>
                    DESCRIPTION
                  </p>
                  <p id={styles.black}>{company.description}</p>
                </div>
                <div className={styles.more_info}>
                  <p style={{ fontSize: "10px" }} id={styles.grey}>
                    LANGUAGES
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "8px",
                    }}
                  >
                    {company.skills.map((language, langIndex) => (
                      <div className={styles.language} key={langIndex}>
                        <p id={styles.black}>{language}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}
