'use client';

import "@/assets/css/uikit.css";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
import Footer from "@/shared/partials/footer";
import Nav from "@/shared/partials/nav";


function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <title>Play Turo</title>
        </head>
      <body>
        <Nav/>
            {children}
            <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;