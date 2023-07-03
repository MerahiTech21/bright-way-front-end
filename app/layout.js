/* eslint-disable @next/next/no-sync-scripts */
import { Suspense } from "react";
import './globals.css'
import { Inter } from 'next/font/google'
import TopBar from '../components/TopBar'
import TheHeader from '../components/TheHeader';
import Footer from '../components/Footer'
import Loading from './loading'
import Providers from '../utils/provider'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s',
    default: 'Kuraz Consultancy',   
  },
  description: 'Welcome to BrightPath Consultancy, your trusted partner in higher education. We believe that every student has unique goals, interests, and challenges, which is why we offer personalized guidance and support tailored to your needs. ',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        <Providers>
          <TheHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />  
           </Providers>
     
      </body>
    </html>
  )
}
