import { basicMetadata } from './backend/seo'
import Header from './components/header/header';
import './globals.css'

export const metadata = basicMetadata({
  title: 'Workage',
  localPath: '/',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
