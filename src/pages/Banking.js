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

const Banking = (props) =>

	<div>
	<Producthero productheroimg="assets/images/Banking.jpg"/>
	
	<div id="category-bar-holder" class="sectioned">
		<div class="this-inner">
			<div class="container">
				<div id="category-items-holder" class="text-xs-center">
				
					<Productcategory1 productcategoryname = "Popular Accts"/>
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
						productitemimg = "assets/images/checkingaccount.jpg"
						productitemtitle = "Innovate Checking Rewards"
						product1headline1 = "$100 online cash rewards bonus"
						product1headlinefeature1 = "$0 monthly service fees with an average beginning day balance of $500 or more in any combination this account and linked qualifying deposits/investments"  
						product1headline2 = "At a Glance"
						product1headlinefeature2 = "Earn interest on your balance, No fee for personal style checks, No fee on non-Innovate ATM transactions, No fees for insufficient funds and returned items "
						product1headline3 = "APR"
						product1headlinefeature3 = "0% intro APR for 12 months from account opening on purchases and balance transfers. After that, 13.49% to 23.49% variable APR."
					 />
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem2 
						productitemimg = "assets/images/savingsaccount.jpg"
						productitemtitle = "Innovate Savings Rewards"
						product2headline1 = "With Innvate Rewards the more you save the more you could earn"
						product2headlinefeature1 = "Earn up to 15% cash back at stores, restaurants and more with InnovateDeals and have it deposited directly into your Rewards Savings account."  
						product2headline2 = "At a Glance"
						product2headlinefeature2 = "High balances earn higher interest rates, automatic savings program, online and mobile banking, FDIC insured"
						product2headline3 = "APR"
						product2headlinefeature3 = "0% intro APR for 12 months from account opening on purchases and balance transfers. After that, 13.49% to 23.49% variable APR."
					 />
					<Productactionbar />

				</div>

				<div class="div-spacer m-y-2"></div>

				<div class="product-item-holder">

					<Productitem3 
						productitemimg = "assets/images/cdaccount.jpg"
						productitemtitle = "Innovate CD Rewards"
						product3headline1 = "Fixed CD rate without a long-term commitment"
						product3headlinefeature1 = "Find the CD account to help with your savings goal"  
						product3headline2 = "At a Glance"
						product3headlinefeature2 = "1% APY on balances held 12 months, minimum deposite $1,000, FDIC insured, automatic renewal."
						product3headline3 = "APR"
						product3headlinefeature3 = "1.5% intro APR for 12 months from account opening or transfers. After that, 1.0% APR."
					 />
					<Productactionbar />
					
				</div>
			</div>
		</div>
	</section>
	</div>
;

export default Banking;