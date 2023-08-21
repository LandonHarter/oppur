"use client";

import React, { useEffect, useContext } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { getJobs } from "@/backend/job";
import { Job } from "@/backend/types";
import Link from "next/link";
import TinderCard from "react-tinder-card";
import UserContext from "@/context/UserContext";
import RequireDesktop from "@/components/desktop";
import LoadingContext from "@/context/LoadingContext";
import Loading from "@/components/loading/loading";

export default function Swiping() {
  const user = useContext(UserContext);
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [likedJobs, setLikedJobs] = React.useState<Job[]>([]);
  const [swipes, setSwipes] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      setJobs(await getJobs(20));
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;
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
              src={user?.profilePicture || "/avatar.png"}
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
              <TinderCard preventSwipe={['up', 'down']} onSwipe={(direction: string) => {
                const newLikedJobs = [...likedJobs, company];
                if (direction === 'right') {
                  setLikedJobs(newLikedJobs);
                }

                setSwipes(swipes + 1);

                if (index === jobs.length - 1) {
                  window.location.href = `/results?likedJobs=${JSON.stringify(newLikedJobs)}`;
                }
              }} className={styles.card} key={index}>
                <div className={styles.inner_wrapper}>
                  <div className={styles.company_container}>
                    <div className={styles.company}>
                      <Image
                        src={company.logo}
                        width={60}
                        height={60}
                        alt={company.name}
                      />
                      <div className={styles.company_title}>
                        <p
                          style={{
                            color: "var(--text500)",
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
                  </div>
                  <div className={styles.more_info}>
                    <p style={{ fontSize: "10px" }} id={styles.grey}>
                      DESCRIPTION
                    </p>
                    <p id={styles.black} style={{
                      color: 'var(--text500)',
                    }}>{company.description}</p>
                  </div>
                  <div className={styles.more_info}>
                    <p style={{ fontSize: "10px" }} id={styles.grey}>
                      SKILLS
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "8px",
                        width: '90%'
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
    </>
  );
}
