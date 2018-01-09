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
              <Homeadvertitem1 advertimg="advert-item-holder advert-1" advertheadline="Verify unusual activity"
                  advertblurb="Alerts let you verify unusual purchases right from the App"/>
              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem1 advertimg="advert-item-holder advert-2" advertheadline="New to Innovate Financial Services?"
                  advertblurb="Let us introduce you to our banking solutions"/>

              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem1 advertimg="advert-item-holder advert-3" advertheadline="Mortgages made simple"
                  advertblurb="Use our mortgage calculator to find out how much you could borrow"/>

              <div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
            </div>

            <div className="col-md-6 col-lg-3 match-height-reset" data-mh="home-adverts">
              <Homeadvertitem1 advertimg="advert-item-holder advert-4" advertheadline="Bank Smarter"
                  advertblurb="Our improved mobile and online banking features put you in control"/>
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

            <Newsblockholder1 newsheadline="College funds" 
                newsheadlineimg="assets/images/home-news-block1.jpg" 
                newsheadlineblurb="4 common questions about saving for college"/>
            <Newsblockholder1 newsheadline="Springtime travel" 
                newsheadlineimg="assets/images/home-news-block2.jpg" 
                newsheadlineblurb="Save money with these easy vacation planning tips"/>
            <Newsblockholder1 newsheadline="New in Mobile Banking" 
                newsheadlineimg="assets/images/home-news-block3.jpg" 
                newsheadlineblurb="Securely send, receive and request money in a few steps"/>
            <Newsblockholder1 newsheadline="Saving and budgeting" 
                newsheadlineimg="assets/images/home-news-block4.jpg" 
                newsheadlineblurb="Tax refund coming? Here are 9 ideas for using it wisely"/>

          </div>
        </div>
      </section>

      </div>;

export default Home;
