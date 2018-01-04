import React from "react";

const Homeadvertitem1 = (props) =>

	<div className={props.advertimg}>
		<div className="advert-item-inner">
			<div className="advert-item-image"></div>
			<div className="advert-item-blurb">
				<h4 className="m-t-0 m-b-1">
					{props.advertheadline}
				</h4>
				<p className="m-b-0">
					{props.advertblurb}
				</p>
			</div>
		</div>
	</div>;

export default Homeadvertitem1;