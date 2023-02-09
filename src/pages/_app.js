import React from 'react';
import '@/assets/styles/index.scss';
import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';

function MyApp({ Component, pageProps }) {
  return (
    <main id="main-site">
      <Header/>
    <Component {...pageProps} />
    <Footer/>
    </main>
  )
}

export default MyApp
