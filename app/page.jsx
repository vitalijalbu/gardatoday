'use client';
import RootLayout from "./layout";
import SectionBlog from "@/shared/sections/section-full";
import SectionGrid from "@/shared/sections/section-grid";
import Section1 from "@/shared/sections/section-1";
import Section2 from "@/shared/sections/section-2";

  const Page = () => {

    const showAlert = () => {
      UIkit.notification({
        message: "Danger message...",
        status: "danger",
        pos: "top-right"
      });
    };

    return(

      <div>
         <Section2/>
        <Section1/>
        <SectionBlog/>
        <SectionGrid/>
       
       
        </div>

  );
  }

  export default Page;