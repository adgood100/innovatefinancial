import React from "react";
import { Link } from "react-router-dom";
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

const Loans = (props) =>

	<div>
	<Producthero productheroimg="assets/images/autoloan.jpg"/>
	
	<div id="category-bar-holder" class="sectioned">
		<div class="this-inner">
			<div class="container">
				<div id="category-items-holder" class="text-xs-center">
				
					<Productcategory1 productcategoryname = "Popular loans" />
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
				
					<Productitem1 
						productitemimg = "assets/images/carloan3.jpg"
						productitemtitle = "Innovate Auto Loans"
						product1headline1 = "0.50% interest rate discounts for Innovate Rewards clients"
						product1headlinefeature1 = "Save with a low rate on a new or refinance auto loan"  
						product1headline2 = "At a Glance"
						product1headlinefeature2 = "Innovate offers competitive rates and flexible loan and payment terms. Explore rates, estimate your monthly payments and apply online for an auto purchase loan or to refinance your current auto loan."
						product1headline3 = "APR"
						product1headlinefeature3 = "3.29% APR for new cars, used cars, or refinanced cars."
					 />						
								
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem2 
						productitemimg = "assets/images/homeloan.jpg"
						productitemtitle = "Innovate Home Loans"
						product2headline1 = "Rewards customers qualify for reduction of $200-$600 in origination fee "
						product2headlinefeature1 = "Whether you’ve found your dream home, or you’re securing your forever home"  
						product2headline2 = "At a Glance"
						product2headlinefeature2 = "Submit your prequalification request online: There's no cost and no obligation — and it only takes about 5 minutes."
						product2headline3 = "APR"
						product2headlinefeature3 = "4.125% 30-year fixed, 3.750% 20-year fixed, 3.625% 15-year fixed, 3.500% 5/1 ARM variable."
					 />
								
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem3 
						productitemimg = "assets/images/studentloans.png"
						productitemtitle = "Innovate Student Loans"
						product3headline1 = "Cash reward for good grades"
						product3headlinefeature1 = "Apply for a private student loan to help you pay for college"  
						product3headline2 = "At a Glance"
						product3headlinefeature2 = "Up to 100% of school-certified college costs are covered. No loan application fees. No origination fees. And no late fees. Get a 3.0 GPA or better and get a full 1% cash reward on each new student loan."
						product3headline3 = "APR"
						product3headlinefeature3 = "4.62% - 11.87% APR Variable Rates, 6.49% - 12.99% Fixed Rates APR."
					 />						
								
					<Productactionbar />
					
				</div>
			</div>
		</div>
	</section>
	</div>
;

export default Loans;