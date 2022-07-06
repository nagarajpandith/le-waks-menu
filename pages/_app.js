import '../styles/globals.css'
import Navbar from '../components/navbar'
import { motion } from 'framer-motion';
import Head from 'next/head'
import { ThreeDots } from 'react-loader-spinner'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => {
        clearTimeout(timer);
      };
  };

  Router.onRouteChangeError = () => {
    setLoading(false);
  };

  return <>
  {
  loading?  
  <div className='flex justify-center items-center my-[50%] md:my-[20%] flex-col'>
    <Image src="/le-waks-logo.png" height={200} width={200} alt="logo" /> 
    <ThreeDots ariaLabel="loading-indicator" color='yellow' />
  </div> :
  <>
  <Head>
        <title>Le Wak&apos;s | Burgers and More</title>
        <meta name="description" content="Le Waks Menu | Burgers and More" />
        <link rel="icon" href="/le-waks-logo.png" />
  </Head>
  
  <motion.div 
  key={router.route}
  initial="pageInitial" 
  animate="pageAnimate" 
  variants={{
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  },
  }}>
  <Navbar />
  <Component {...pageProps} />
  </motion.div>
  </>
  }
  </>
}

export default MyApp
