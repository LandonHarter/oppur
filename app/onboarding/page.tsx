"use client";

import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import UserContext from "@/context/UserContext";
import LoadingContext from "@/context/LoadingContext";
import OnboardingSkills from "./sections/skills";
import RequireDesktop from "@/components/desktop";


export default function SetupPage() {
  const user = useContext(UserContext);
  const { startLoading, stopLoading } = useContext(LoadingContext);

  const [section, setSection] = useState('skills');

  function getSection() {
    switch (section) {
      case 'skills':
        return (<OnboardingSkills nextSection={setSection} />);
      default:
        return (<div>Unknown section</div>);
    }
  }

  if (!user) {
    return;
  }

  return (
    <>
      <div className={styles.desktop}><RequireDesktop /></div>
      <div className={styles.mobile}>
        {getSection()}
      </div>
    </>
  );
}
