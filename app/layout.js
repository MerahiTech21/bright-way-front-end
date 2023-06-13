import { Suspense } from "react";
import './globals.css'
import 'react-day-picker/dist/style.css';
import { Inter } from 'next/font/google'
import TopBar from '../components/TopBar'
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter'
import Loading from './loading'
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
        <TopBar />
        <TheHeader />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {
          <TheFooter />  
       }     
      </body>
    </html>
  )
}
