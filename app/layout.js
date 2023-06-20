/* eslint-disable @next/next/no-sync-scripts */
import { Suspense } from "react";
import './globals.css'
import { Inter } from 'next/font/google'
import TopBar from '../components/TopBar'
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter'
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
          <TopBar />
          <TheHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {
            <TheFooter />  
          }  
          
            <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
            <script src="https://mediafiles.botpress.cloud/d55d4fce-33fd-4014-967d-f45258752372/webchat/config.js" defer></script>
        </Providers>
     
      </body>
      {
        // <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        // <script src="https://mediafiles.botpress.cloud/d55d4fce-33fd-4014-967d-f45258752372/webchat/config.js" defer></script>
   }
    </html>
  )
}
