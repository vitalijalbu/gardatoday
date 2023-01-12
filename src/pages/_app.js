import React from 'react';
import 'uikit/dist/css/uikit.css'
import '@/assets/styles/index.scss';

import Header from '@/shared/partials/header';
import Footer from '@/shared/partials/footer';


function MyApp({ Component, pageProps }) {
  return (
      <div id="main-site">
      <Header/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}

export default MyApp
