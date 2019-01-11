/*
This is a calculator designed to determine partner commission on a weekly basis. 
You can adjust the numbers in the variable section as needed to determine daily, monthly, or yearly values if needed.
If you wanted daily numbers instead of weekly you would divide the necessary variables by 7. 
i.e, you would change eden_base to be (600/7) or 85.714 and base_pay to (800/7) or 114.286.
*/

let pay = function(sales_total) {
 
  /*
  VARIABLE SECTION
  */
  
  //eden_base is the amount we need from each partner to keep the lights on.
  let eden_base = 600;
  //amount_owed is partner sales minus the eden base amount.
  let amount_owed = eden_base - sales_total;
  //base_pay is equal to the amount we set where we receive 100% of the commission after the base pay is subtracted.
  let base_pay = 800;
  //pay_cap is the point where the partner starts to pay a portion of their earnings back into the business.
  let pay_cap = eden_base + base_pay;
  //The amount going back to eden after the pay cap is reached is set by eden_percent - currently at 10%, but adjustable if needed.
  let eden_percent = .10;
  //gross commission is the amount left after the base pay is removed from the partners sales.  
  let gross_commission = sales_total - eden_base;
  
  let net_commission = gross_commission - base_pay;
  let eden_cut = net_commission * .10;
  let partner_final = (net_commission - eden_cut.toFixed(2)) + base_pay;
  let eden_final = eden_base + eden_cut;

  /*
  ACTUAL CALCULATOR SECTION
  */
  
  if (sales_total < eden_base) {
    console.log("Oh no!  You owe the business $" + amount_owed + " this week.");
  } else if (sales_total === eden_base) {
    console.log("Well, look at that.  You broke even this week.  Thank you for helping keep the lights on :)");
  } else if (sales_total > eden_base && sales_total <= pay_cap) {
    console.log("Congrats - you made $" + gross_commission + ". You might want to work more next week.");
  } else if (sales_total > eden_base && sales_total > pay_cap) {
    console.log("Woohoo!  You made so much you have to give some back to the business!")
    console.log("Here is what you earned - $" + partner_final +".");
    console.log("Here is Eden's portion - $" + eden_final.toFixed(2));
  };
};

//The following line runs the actual code.  Input the salary earned in the time period you have set the variables for and watch the magic happen!
pay(2081.75);

//Success!!!
