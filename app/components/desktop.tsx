import Image from "next/image";

export default function RequireDesktop() {
    const imageHeight = 125;

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image src='/oppur-logo.png' alt="logo" width={306} height={77} style={{
                width: (306 / 77) * imageHeight,
                height: imageHeight
            }} />
            <h1 style={{
                marginTop: 40,
                fontFamily: 'Inter Bold',
                fontSize: '56px',
                color: 'var(--text600)'
            }}>Oppur is not available on desktop yet.</h1>
            <p style={{
                marginTop: 20,
                fontFamily: 'Inter Regular',
                fontSize: '24px',
                color: 'var(--text600)'
            }}>Please shrink the window size down to a mobile phone to continue.</p>
        </div>
    )
}