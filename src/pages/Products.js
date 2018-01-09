import React from "react";
import Productcategory1 from "../components/Productcategory1";
import Productcategory2 from "../components/Productcategory2";
import Productcategory3 from "../components/Productcategory3";
import Productcategory4 from "../components/Productcategory4";
import Productcategory5 from "../components/Productcategory5";
import Productitem1 from "../components/Productitem1";
import Productitem2 from "../components/Productitem2";
import Productitem3 from "../components/Productitem3";
import Producthero from "../components/Producthero";
import Productactionbar from "../components/Productactionbar";

const Products = () =>

	<div>
	<Producthero />
	
	<div id="category-bar-holder" class="sectioned">
		<div class="this-inner">
			<div class="container">
				<div id="category-items-holder" class="text-xs-center">
				
					<Productcategory1 />
					<Productcategory2 />
					<Productcategory3 />
					<Productcategory4 />
					<Productcategory5 />
				
				</div>
			</div>
		</div>
	</div>

	<section class="sectioned section-grey">
		<div class="container">
			<div id="products-page-overall">
				<div class="product-item-holder">
				
					<Productitem1 />
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem2 />
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem3 />
					<Productactionbar />
					
				</div>
			</div>
		</div>
	</section>
	</div>;

export default Products;