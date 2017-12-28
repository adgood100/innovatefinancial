
import React from "react";
import ApplicationBanner from "../components/ApplicationBanner";
import ApplicationForm from "../components/ApplicationForm";
import HelpPan from "../components/HelpPan";
import FAQPan from "../components/FAQPan";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";





//start with banner and navbar
const Application = () =>

<div>
<ApplicationBanner />
<section className="sectioned section-grey">
  <div className="container">
    <div id="accounts-page-overall">
      <div className="div-spacer m-y-1"></div>
      <div className="row">
        <div className="col-md-7 col-xl-8">

          <ApplicationForm />

        </div>
        <div className="col-md-5 col-xl-4">

          <HelpPan />

          <div className="div-spacer p-t-1"></div>

          <FAQPan />

          <div className="div-spacer p-t-1"></div>

          <ProductDisplay />

        </div>
      </div>
    </div>
  </div>

</section>

</div>
export default Application;
