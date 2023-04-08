import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './home/index';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bringin</title>
        <link rel="icon" href="/web.logo.png" />
      </Head>
      <div className="">
     <HomePage></HomePage>
     


    </div>
    </>
  )
}
