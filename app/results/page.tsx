"use client";

import React, { useContext, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link"
import RequireDesktop from "@/components/desktop";
import UserContext from "@/context/UserContext";
import { Job } from "@/backend/types";
import { recommendJobs } from "@/backend/job";
import { useSearchParams } from "next/navigation";
import LoadingContext from "@/context/LoadingContext";

export default function Results() {
  const user = useContext(UserContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);
  const searchParams = useSearchParams();
  const [recommendedCompanies, setRecommendedCompanies] = React.useState<Job[]>([]);

  useEffect(() => {
    if (!user) return;

    (async () => {
      const jobsJson = searchParams.get('likedJobs');
      if (!jobsJson) {
        window.location.href = '/';
        return;
      }

      startLoading();
      const likedJobs = JSON.parse(jobsJson) as Job[];
      //const jobs = await recommendJobs(likedJobs);
      setRecommendedCompanies(likedJobs);
      stopLoading();
    })();
  }, []);

  if (!user) {
    return <></>;
  }
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
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80vw'
          }}>
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
              src={user.profilePicture}
              alt="Logo"
              width={38}
              height={38}
              className={styles.logo}
              style={{
                borderRadius: '100%',
                cursor: 'pointer'
              }}
            />
          </nav>
        </header>
        <div className={styles.wrapper} style={{ alignItems: 'center' }}>
          <div className={styles.card_wrapper}>
            {recommendedCompanies.map((company, index) => (
              <Link href={`mailto:${company.email}`} key={index}>
                <div
                  className={`${styles.card}
                    }`}
                  key={index}
                >
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
                            className={styles.company_title}
                          >
                            {company.name}
                          </p>
                          <p
                            className={styles.company_type}
                          >
                            {company.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
