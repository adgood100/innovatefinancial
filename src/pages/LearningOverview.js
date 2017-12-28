import React from "react";
import LearningBanner from "../components/LearningBanner";
import LifeFilter from "../components/LifeFilter";
import LearningBlock from "../components/LearningBlock";
import Footer from "../components/Footer";





//start with banner and navbar
const LearningOverview = () =>
<div>
<div>
  <LearningBanner />
  <LifeFilter />
</div>

<section className="sectioned section-grey">
  <div className="container">
    <div id="accounts-page-overall">
      <div className="div-spacer m-y-1"></div>
        <div className="row">
          <div className="col-md-12 col-xl-16">

            <LearningBlock />

          </div>
        </div>
      </div>
    </div>
</section>


</div>

export default LearningOverview;
