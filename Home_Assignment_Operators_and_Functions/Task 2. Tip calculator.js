// 1. Declare a function.
// 2. Use the formula Tip = ( Total Bill * 10% ) to perform the converion. Store the result into new variable name tempTipAmount
// 3. Return the calcuated value. (used return keyword)

function ComputeTip(TotBill){
    let tempTipAmount = (TotBill * 0.10);
    return tempTipAmount;
}
console.log(ComputeTip(84)); //84 T=8.4 
console.log(ComputeTip(95)); //95 T=9.5 