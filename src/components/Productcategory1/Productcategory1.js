import React from "react";

const Productcategory1 = (props) =>

	<div className="category-item" id="category-popular-cards">
		<a href="#" className="d-block">
			<div className="category-image">
				<div className="img-holder m-x-auto">
					<img className="img-item" src="assets/images/checking-plus.png"/>
				</div>
			</div>
			<div className="category-title">
				<span>{props.productcategoryname}</span>
			</div>
		</a>
	</div>;

export default Productcategory1;	