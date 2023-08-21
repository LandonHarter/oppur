import { basicMetadata } from './backend/seo'
import Header from './components/header/header';
import { UserContextProvider, LoadingContextProvider } from './context/context';
import './globals.css'

export const metadata = basicMetadata({
  title: 'Oppur • Explore Internships',
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
        <LoadingContextProvider>
          <UserContextProvider>
            <Header />
            {children}
          </UserContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  )
}
