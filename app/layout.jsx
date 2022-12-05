'use client';

import "@/assets/css/uikit.css";
//import "@/assets/css/theme.default.css";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import Footer from "@/shared/partials/footer";
import Nav from "@/shared/partials/nav";


function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <title>GardaToday</title>
        <link href="/joomla/templates/yootheme/css/theme.paladin.default.css?1669736908" rel="stylesheet" />
        </head>
      <body>
        <main id="main-layout">
          <div class="tm-page">
        <Nav/>
            {children}
            <Footer/>
            </div>
            </main>
      </body>
    </html>
  );
}

export default RootLayout;