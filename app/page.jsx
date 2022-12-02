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
        {/* This is a button toggling the modal */}
        <button
            className="uk-button uk-button-default"
            data-uk-toggle="target: #my-id"
            type="button"
          >
            modal
          </button>
          <button onClick={showAlert}>alert</button>
          {/* This is the modal */}
          <div id="my-id" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body">
              <button
                className="uk-button uk-button-default uk-modal-close"
                type="button"
              >
                close
              </button>
            </div>
          </div>
        
             <div>
          <button className="uk-button uk-button-default" type="button">
            Hover
          </button>
          <div className="uk-width-large" data-uk-dropdown="mode: click">
            <div className="uk-dropdown-grid uk-child-width-1-2@m" data-uk-grid>
              <div>
                <ul className="uk-nav uk-dropdown-nav">
                  <li className="uk-active">
                    <a href="#">Active</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li className="uk-nav-header">Header</li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li className="uk-nav-divider" />
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
       
        </div>

  );
  }

  export default Page;