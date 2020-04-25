// 0.1 Wrapper
let global = function() {

// 1. Pull in all the form element ID's
var btn = document.getElementById("btn");
var form = document.getElementById("payform");
var service_sales = document.getElementById("service_sales");
var unrefined_tips = document.getElementById("tips");
var endgame = document.getElementById("results");
var partner = document.getElementById("partner");
var char = document.getElementById("char");
var handoff = '';
var bonus = 0;

//2. Write the functions
let fork = function(event){
	event.preventDefault(); // 2.a This prevents the page from refreshing instantly
	console.log(partner.value);

  if (partner.value === "Select a Partner") {
			endgame.innerHTML = `Please Select a Partner`
	} else if (partner.value === "Charlotte") {
		charlotte();
	} else {
		pay();
	};

};

let pay = function(){
	console.log("Pay Function has run");

	// Define what we need to know about pay and how it is handled.
  	let sales_total = Number(service_sales.value).toFixed(2);
    let tips = Number(unrefined_tips.value).toFixed(2);
  	let combined_total_earned = +sales_total + +tips; //added the extra + in front to force it to behave like a number.
  	let eden_base = 650;
  	let amount_owed = ~eden_base - ~sales_total;
  	let base_pay = 800;
  	let pay_cap = eden_base + base_pay;
  	let eden_percent = .30;
  	let gross_commission = sales_total - eden_base;
  	let net_commission = gross_commission - base_pay;
  	let eden_cut = net_commission * eden_percent;
  	let partner_final = (net_commission - eden_cut.toFixed(2)) + base_pay;
  	let eden_final = eden_base + eden_cut;
  	let eden_final_rounded = eden_final.toFixed(2);
  	let combined_takehome_with_bonus = partner_final + +tips;
  	let combined_takehome_without_bonus = gross_commission + +tips;
  	let results = `Your total earnings this week were: <strong  style="color:#89b940;">$${combined_total_earned.toFixed(2)}</strong><br>`;

	  bonus = (net_commission - eden_cut.toFixed(2));

// Can't have a negative bonus.
		if (bonus <= 0) {
			bonus = 0;
				};

// This determines what will display based on the if criteria
 	if (sales_total < eden_base) {
   	 results += `<p>Oh no!  You owe the business <strong style="color:red;">$${amount_owed}</strong> this week.</p>`
		 handoff = amount_owed;
  		} else if (sales_total == eden_base) {
   	 results += `<p>Well, look at that.  You broke even this week.</p><p>Thank you for helping keep the lights on :)</p><br>There  is no takehome pay, but you do not owe anything either.<p>Don't forget: You earned <strong  style="color:#89b940;">$${tips}</strong> in tips!</p>`;
		 handoff = combined_total_earned.toFixed(2);
		} else if (sales_total > eden_base && sales_total <= pay_cap) {
		 results += `<p>Takehome (without tips): <strong>$${gross_commission}</strong>.</p><p>Eden's Fee: <strong style="color:red;">$${eden_base}</strong></p><p>Combined Takehome <strong  style="color:#89b940;">$${combined_takehome_without_bonus}</strong>.</p><p>You might want to work more next week.</p>`;
		 handoff = combined_takehome_without_bonus;
		} else if (sales_total > eden_base && sales_total > pay_cap) {
   	 results += `<p>Congratulations!  You've earned a bonus!</p><p>Eden's Fee: <strong style="color:red;">$${eden_final_rounded}</strong><p>Takehome (w/o tips): <strong>$${partner_final.toFixed(2)}</strong> (<strong style="color:#89b940;">$${bonus.toFixed(2)}</strong> in Bonus Pay!).</p></p>Combined Takehome: <strong  style="color:#89b940;">$${combined_takehome_with_bonus.toFixed(2)}</strong></p>`
		 handoff = combined_takehome_with_bonus.toFixed(2);
		};
	endgame.innerHTML = results;

	};

// I wanted extra info displayed on mine.
	let charlotte = function(){
		console.log("Charlotte Function has run");
		pay();
		/*
		let sales_total = Number(service_sales.value).toFixed(2);
  	let tips = Number(unrefined_tips.value).toFixed(2);
		char.innerHTML += `error line 86`
		char.innerHTML = `<strong>Total Takehome: $${handoff}  |  Your bonus is : $${bonus.toFixed(2)}</strong>`;
		*/
		};

// 3. Assign event listeners to the button
btn.addEventListener("click", fork);

};

global();
