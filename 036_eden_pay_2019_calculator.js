

let pay = function(sales_total) {
  let eden_base = 600;
  let amount_owed = eden_base - sales_total;
  let base_pay = 800;
  let pay_cap = eden_base + base_pay;
  let eden_percent = .10;
  let gross_commission = sales_total - eden_base;
  let net_commission = gross_commission - base_pay;
  let eden_cut = net_commission * .10;
  let partner_final = (net_commission - eden_cut.toFixed(2)) + base_pay;
  let eden_final = eden_base + eden_cut;

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

pay(2081.75);

//Success!!!
