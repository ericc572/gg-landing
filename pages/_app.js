// pages/_app.js
import Script from 'next/script';
import '../styles/globals.css';
import '../styles/vines.css';

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <Navbar />
      <Component {...pageProps} />

      {}
    </>
  );
}

export default MyApp;
