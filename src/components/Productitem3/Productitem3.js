import React from "react";

const Productitem3 = (props) =>

	<div className="this-inner">
		<div className="product-item-image">
			<div className="img-holder m-x-auto">
				<img className="img-item" src={props.productitemimg}/>
			</div>
		</div>
		<div className="product-item-blurb">
			<div className="product-item-title m-b-1">
				<h3 className="m-y-0">{props.productitemtitle}</h3>
			</div>
			<div className="product-item-details">
				<div className="this-inner">
					<div className="details-section section-large">
						<div className="headline">
							<h4>{props.product3headline1}</h4>
						</div>
						<p className="m-b-0">
							{props.product3headlinefeature1}
						</p>
					</div>
					<div className="details-section">
						<div className="headline">
							<h5 className="text-uppercase"><span className="hidden-md-down hidden-xl-up">&nbsp;</span><br className="hidden-md-down hidden-xl-up"/>{props.product3headline2}</h5>
						</div>
						<p className="m-b-0">
							{props.product3headlinefeature2}
						</p>
					</div>
					<div className="details-section">
						<div className="headline">
							<h5 className="text-uppercase"><span className="hidden-md-down hidden-xl-up">&nbsp;</span><br className="hidden-md-down hidden-xl-up"/>{props.product3headline3}</h5>
						</div>
						<p className="m-b-0">
							{props.product3headlinefeature3}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

export default Productitem3;