import React from "react";

const Banner = () => 

	<div id="banner-holder">
		<div id="banner-image">
			<div className="img-holder m-x-auto">
				<img className="img-item mid-mid" src="assets/images/home-banner.jpg" />
			</div>
		</div>
		<div id="banner-inner">
			<div id="banner-content">
				<div className="container">
					<div id="banner-content-inner">
						<h1 className="m-t-0 m-b-2 text-whited">
							It’s fast, easy and secure to apply for an online checking account
						</h1>
						<h2 className="m-y-0 text-whited">
							What are you waiting for?
						</h2>
						<div className="div-spacer m-b-2"></div>
						<p className="m-b-0">
							<a href="#" className="btn btn-orange text-uppercase">
								Learn More
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>;

export default Banner;