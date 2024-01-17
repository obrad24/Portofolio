import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Obrad Personal Portofolio',
  description: 'Obrad is a frontend developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{$inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31rem] w-[31rem] rounded-full blur-[10rem] sm:w-[68rem]'></div>
        <div className='bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem]
        md:left-[33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
