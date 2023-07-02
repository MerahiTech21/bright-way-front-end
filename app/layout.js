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
    default: 'Bright Consultancy',   
  },
  description: '',
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
