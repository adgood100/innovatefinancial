import React from "react";

const Newsblockholder1 = (props) =>

	<div className="col-sm-6 col-lg-3">
		<div className="news-block-holder">
			<div className="headline m-b-1">
				<h3>{props.newsheadline}</h3>
			</div>
			<div className="this-block-inner">
				<div className="this-block-image">
					<div className="img-holder m-x-auto">
						<a href="#"><img className="img-item mid-mid" src={props.newsheadlineimg} /></a>
					</div>
				</div>
				<div className="this-block-blurb">
					<div className="this-blurb-inner">
						<span>{props.newsheadlineblurb}</span>
					</div>
				</div>
			</div>
		</div>
		<div className="div-spacer m-y-1 p-y-1 hidden-lg-up"></div>
	</div>;

export default Newsblockholder1;