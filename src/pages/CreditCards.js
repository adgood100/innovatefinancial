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

const CreditCards = (props) =>

	<div>
	<Producthero productheroimg="assets/images/bestcreditcard.jpg"/>
	
	<div id="category-bar-holder" class="sectioned">
		<div class="this-inner">
			<div class="container">
				<div id="category-items-holder" class="text-xs-center">
				
					<Productcategory1 productcategoryname = "Popular cards" />
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
						productitemimg = "assets/images/credit-card-corporate-rewards-slanted.png"
						productitemtitle = "Innovate Cash Rewards"
						product1headline1 = "$100 online cash rewards bonus"
						product1headlinefeature1 = "1% cash back on every purchase, 2% at grocery stores and wholesale clubs and 3% on gas for the first $2,500 in combined grocery/wholesale club/gas purchases each quarter."  
						product1headline2 = "At a Glance"
						product1headlinefeature2 = "Earn more cash back for the things you buy most with a $100 online cash rewards bonus offer"
						product1headline3 = "APR"
						product1headlinefeature3 = "0% intro APR for 12 months from account opening on purchases and balance transfers. After that, 13.49% to 23.49% variable APR."
					 />								
								
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem2 
						productitemimg = "assets/images/credit-card-travel-rewards-slanted.png"
						productitemtitle = "Innovate Travel Rewards"
						product2headline1 = "20,000 online bonus points offer"
						product2headlinefeature1 = "Earn unlimited 1.5 points for every $1 you spend on all purchases everywhere, every time and no expiration on points."  
						product2headline2 = "At a Glance"
						product2headlinefeature2 = "Ditch the restrictions of typical airline rewards cards. Any airline, any hotel, anytime. No blackout dates."
						product2headline3 = "APR"
						product2headlinefeature3 = "0% intro APR for 12 months from account opening on purchases. After that, 15.49% to 23.49% variable APR."
					 />						
								
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem3 
						productitemimg = "assets/images/credit-card-student-rewards-slanted.png"
						productitemtitle = "Innovate Student Rewards"
						product3headline1 = "Start building your financial future"
						product3headlinefeature1 = "1% cash back on every purchase, 2% at grocery stores and wholesale clubs and 3% on gas for the first $2,500 in combined grocery/wholesale club/gas purchases each quarter."  
						product3headline2 = "At a Glance"
						product3headlinefeature2 = "Start building your financial future while earning more cash back for the things you buy most."
						product3headline3 = "APR"
						product3headlinefeature3 = "0% intro APR for 12 months from account opening on purchases. After that, 13.49% - 23.49% variable APR."
					 />						
								
					<Productactionbar />
					
				</div>
			</div>
		</div>
	</section>
	</div>
;

export default CreditCards;