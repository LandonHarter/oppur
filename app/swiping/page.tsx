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
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    (async () => {
      setJobs(await getJobs());
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
    </>
  );
}
