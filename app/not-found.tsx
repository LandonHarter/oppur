import Image from "next/image";
import RequireDesktop from "./components/desktop";
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <>
            <div className={styles.desktop}><RequireDesktop /></div>
            <div className={styles.mobile}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh'
                }}>
                    <Image src='/oppur-logo.png' alt="logo" width={306} height={77} style={{
                        width: '70vw',
                        height: '17.615vw'
                    }} />
                    <h1 style={{
                        marginTop: 40,
                        fontFamily: 'Inter Bold',
                        fontSize: '56px',
                        color: 'var(--text600)',
                        textAlign: 'center'
                    }}>404</h1>
                    <p style={{
                        marginTop: 20,
                        fontFamily: 'Inter Regular',
                        fontSize: '24px',
                        color: 'var(--text600)',
                        textAlign: 'center'
                    }}>This page could not be found.</p>
                </div>
            </div>
        </>
    );
}