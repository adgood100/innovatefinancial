import React from "react";
import { Link } from "react-router-dom";
import LearningBanner from "../components/LearningBanner";
import StoryBlock from "../components/StoryBlock";
import StorySideBar1 from "../components/StorySideBar1";
import StorySideBar2 from "../components/StorySideBar2";


//start with banner and navbar
const LearningStory = () =>

<div>
<LearningBanner />
<section className="sectioned section-grey">
  <div className="container">
    <div id="accounts-page-overall">
      <div className="div-spacer m-y-1"></div>
        <div className="row">
          <div className="col-md-7 col-xl-8">

            <StoryBlock />

          </div>
          <div className="col-md-5 col-xl-4">

            <StorySideBar1 />

            <div className="div-spacer p-t-1"></div>

            <StorySideBar2 />

          </div>
        </div>
      </div>
    </div>
</section>
</div>
export default LearningStory;
