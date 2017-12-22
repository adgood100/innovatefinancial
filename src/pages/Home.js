import React from "react";
import Banner from "../components/Banner";
import Homeadvertsfilter from "../components/Homeadvertsfilter";
import Homeadvertitem1 from "../components/Homeadvertitem1";
import Homeadvertitem2 from "../components/Homeadvertitem2";
import Homeadvertitem3 from "../components/Homeadvertitem3";
import Homeadvertitem4 from "../components/Homeadvertitem4";
import Iconteaserholder1 from "../components/Iconteaserholder1";
import Iconteaserholder2 from "../components/Iconteaserholder2";
import Popularlinks from "../components/Popularlinks";
import Newsblockholder1 from "../components/Newsblockholder1";
import Newsblockholder2 from "../components/Newsblockholder2";
import Newsblockholder3 from "../components/Newsblockholder3";
import Newsblockholder4 from "../components/Newsblockholder4";

const Home = () =>
  <div>
    <Banner />
    <section className="sectioned section-white">
      <div className="container">
      <Homeadvertsfilter />
      <div className="div-spacer m-b-2"></div>
        <div id="home-adverts-holder">
          <div className="row">
            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem1 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem2 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem3 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem4 />
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

          </div>
        </div>
      </div>
      </section>
      <section className="sectioned section-grey">
        <div className="container">
          <div className="row">

            <Iconteaserholder1 />
            <Iconteaserholder2 />
            <Popularlinks />

          </div>
        </div>
      </section>
      <section className="sectioned section-white">
        <div className="container">
          <h2 className="m-t-0 m-b-3">News and Information</h2>
          <div className="row">

            <Newsblockholder1 />
            <Newsblockholder2 />
            <Newsblockholder3 />
            <Newsblockholder4 />

          </div>
        </div>
      </section>

      </div>;

export default Home;
