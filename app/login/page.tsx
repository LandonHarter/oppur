'use client'

import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className={styles.mobile}>
            <header>
                <nav>
                    <a href="/">
                        <img src="/public/left-arrow.svg" alt="Back" />
                    </a>
                </nav>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.flex}>
                    <div className={styles.top}>
                        <img src="/public/log-in.svg" width="280px" alt="Login" />
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
                                            <img src="/public/google-icon.png" height="23px" alt="Google" />
                                            <p
                                                style={{
                                                    fontFamily: 'Inter Bold',
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
                                    fontFamily: 'Inter Regular',
                                    fontSize: '15px',
                                    color: '#7b7b7b',
                                    textAlign: 'center',
                                }}
                            >
                                Don't have an account? <a href="/pages/sign-up">Sign Up</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <script src="/main.js"></script>
        </div>
    );
}
