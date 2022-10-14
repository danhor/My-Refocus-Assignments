/*
Task 2 Saving App

You are now working on a finance app that helps users save money. To encourage 
users to continue saving, you are adding a feature to show how much money they 
have already saved.
Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500. Use 
console.log and variables to output the following in JavaScript

Output:
"Thank you for your discipline and hardwork, Sam! You are now 25% away from 
your goal of saving ₱10,000."

*/

//Store in a variable named SamSupposeSavingAmount - the amount Sam wants to save 10,000
let SamSupposeSavingAmount = 10000; 

//Sam already saved 7,500
let SamSavedAmount = 7500; 

//Store in a variable named SamSavingPercentage - 25% goal
let SamSavingPercentage = (SamSupposeSavingAmount - SamSavedAmount); 

//To get the total percentage of Sams goal
let TotalPercentage = SamSavingPercentage/100;

//Display then message using console.log.
//console.log('"Thank you for discipline and hardwork, Sam! You are now '+TotalPercentage+'% away from your goal of saving ₱'+SamSupposeSavingAmount+'."');
console.log(`"Thank you for discipline and hardwork, Sam! You are now ${TotalPercentage}% away from your goal of saving ₱${SamSupposeSavingAmount}."`);

