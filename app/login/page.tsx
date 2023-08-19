'use client'

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
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
                        <Image src="/log-in.svg" width={280} height={280} alt="Login" />
                        <div className={styles.topBottom}>
                            <h2>Welcome Back.</h2>
                            <p>Log in to Concussify!</p>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <button
                                className={styles.card}
                                style={{ borderWidth: '0px' }}
                                onClick={() => {
                                    window.location.href = 'http://127.0.0.1:8787/v1/auth/google';
                                }}
                            >
                                <div className={styles.cardTitle}>
                                    <div
                                        style={{
                                            paddingTop: '20px',
                                            paddingBottom: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width: '80vw',
                                        }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                                            <Image src="/google-icon.png" width={23} height={23} alt="Google" />
                                            <p
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight:700,
                                                    color: '#323649',
                                                    width: 'fit-content',
                                                }}
                                            >
                                                Continue With Google
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <span
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: '15px',
                                    color: '#7b7b7b',
                                    textAlign: 'center',
                                }}
                            >
                                Don&apos;t have an account? <Link href="/register"><u>Sign Up</u></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
