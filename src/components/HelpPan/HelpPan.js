import React from "react";

const HelpPan = () =>

<div className="sidebar-collapse-item">
	<div className="sidebar-collapse-header">
		<div className="this-activator" data-toggle="collapse" href="#sidebar-need-help" aria-expanded="false" aria-controls="collapseExample">
			<span>Need help?</span>
		</div>
	</div>
	<div className="sidebar-collapse-content collapse p-a-2 backgrounded-whited" id="sidebar-need-help">
		<div className="headline m-b-1">
			<h4>Most popular stories</h4>
		</div>
		<div className="learning-sidebar-holder">
			<div className="learning-item">
				<div className="this-image">
					<div className="img-holder m-x-auto">
						<a href=""><img className="img-item mid-mid" src="http://placehold.it/100x300" /></a>
					</div>
				</div>
				<div className="this-blurb">
					<div className="this-inner">
						<a href="">4 ways to overcome your long commute</a>
					</div>
				</div>
			</div>
			<div className="learning-item">
				<div className="this-image">
					<div className="img-holder m-x-auto">
						<a href=""><img className="img-item mid-mid" src="http://placehold.it/300x100" /></a>
					</div>
				</div>
				<div className="this-blurb">
					<div className="this-inner">
						<a href="">The new wave of eco-friendly cars</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

export default HelpPan;
