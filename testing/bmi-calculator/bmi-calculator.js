//BMi Calculator using javascript

let nHeight = 0; //using CM
let nWeight = 0; //using KG

function ComputeBMI(nHeight, nWeight){
    let nBMI = (nWeight / (nHeight * nHeight) * 10000);
    return nBMI;
}

const nBMIResult = ComputeBMI(175,80);
console.log(`Your BMI is ${nBMIResult.toFixed(2)}`); //BMI output result

//condition to get bmi result status
if(nBMIResult <= 24.9){
    console.log('You are underweight');
} else if(nBMIResult >= 25 && nBMIResult <= 29.9){
    console.log('You are healthy weight');
} else {
    console.log('You are overweight');
}




