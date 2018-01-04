
import React from "react";
import Registrationbanner from "../components/Registrationbanner";
import Registrationform from "../components/Registrationform";
import Registrationloginsidebar from "../components/Registrationloginsidebar";
import HelpPan from "../components/HelpPan";
import FAQPan from "../components/FAQPan";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";





//start with banner and navbar
const Registration = () =>

<div>
<Registrationbanner />
<section className="sectioned section-grey">
  <div className="container">
    <div id="accounts-page-overall">
      <div className="div-spacer m-y-1"></div>
      <div className="row">
        <div className="col-md-7 col-xl-8">

          <Registrationform />

        </div>
        <div className="col-md-5 col-xl-4">

          <Registrationloginsidebar />

          <div className="div-spacer p-t-1"></div>

          <HelpPan />

        </div>
      </div>
    </div>
  </div>

</section>

</div>
export default Registration;
