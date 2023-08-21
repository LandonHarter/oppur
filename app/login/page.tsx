'use client'

import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import UserContext from '@/context/UserContext';
import { signInWithGoogle } from '@/backend/login';
import LoadingContext from '@/context/LoadingContext';
import RequireDesktop from '@/components/desktop';

export default function LoginPage() {
    const user = useContext(UserContext);
    const { startLoading, stopLoading } = useContext(LoadingContext);

    if (user) {
        window.location.href = '/';
        return;
    }

    return (
        <>
            <div className={styles.desktop}><RequireDesktop /></div>
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
                                <p>Log in to Oppur!</p>
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <button
                                    className={styles.card}
                                    onClick={async () => {
                                        startLoading();
                                        const user = await signInWithGoogle();
                                        if (user) {
                                            window.location.href = '/';
                                        } else {
                                            stopLoading();
                                        }
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
                                            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }} className={styles.provider_button}>
                                                <Image src="/google-icon.png" width={23} height={23} alt="Google" />
                                                <p
                                                    style={{
                                                        fontFamily: 'Inter Bold',
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
                                        fontFamily: 'Inter Medium',
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
        </>
    );
}
