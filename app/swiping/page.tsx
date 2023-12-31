"use client";

import React, { useEffect, useContext } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { getJobs } from "@/backend/job";
import { Job, JobType } from "@/backend/types";
import Link from "next/link";
import TinderCard from "react-tinder-card";
import UserContext from "@/context/UserContext";
import RequireDesktop from "@/components/desktop";
import LoadingContext from "@/context/LoadingContext";
import Loading from "@/components/loading/loading";
import { useRouter } from "next/navigation";
import JobsContext from "@/context/JobsContext";

export default function Swiping() {
  const user = useContext(UserContext);
  const { likedJobs, setLikedJobs } = useContext(JobsContext);

  const router = useRouter();
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState(true);
  let currentSwiped = 0;

  useEffect(() => {
    (async () => {
      const jobsArr = await getJobs(20);
      setJobs(jobsArr);
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
                if (direction === 'right') {
                  setLikedJobs((prev: Job[]) => [...prev, company]);
                }
                currentSwiped++;

                if (currentSwiped === jobs.length) {
                  router.push('/results');
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
