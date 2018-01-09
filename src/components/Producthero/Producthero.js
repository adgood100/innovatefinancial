import React from "react";

const Producthero = (props) =>

	<div id="banner-holder">
		<div id="banner-image">
			<div className="img-holder m-x-auto">
				<img className="img-item mid-mid" src={props.productheroimg} style={{height: 150}}/>
			</div>
		</div>
		<div id="banner-inner" className="sub-page-banner"></div>
	</div>;

export default Producthero;
