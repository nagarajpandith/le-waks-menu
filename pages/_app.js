import '../styles/globals.css';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Le Wak&apos;s | Burgers and More</title>
        <meta name="description" content="Le Waks Menu | Burgers and More" />
        <link rel="icon" href="/le-waks-logo.png" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          {/* {showHeader && 
  <Navbar />} */}
          <Navbar />
          <NextNProgress color="#fde68a" />
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
