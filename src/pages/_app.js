import React from 'react';
import 'uikit/dist/css/uikit.css'
import '@/assets/styles/index.scss';

import TopNav from '@/shared/partials/nav';
import Footer from '@/shared/partials/footer';


function MyApp({ Component, pageProps }) {
  return (
      <div id="main-site">
      <TopNav/>
    <Component {...pageProps} />
    <Footer/>
    </div>
  )
}

export default MyApp
