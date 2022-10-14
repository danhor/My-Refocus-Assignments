// 1. Declare a function.
// 2. Use the formula K = ( C + 273.15 ) to perform the converion. Store the result into new variable name tempKelvin.
// 3. Return the calcuated value. (used return keyword)


function ConvertCeliusToKelvin(tempCelius){
    let tempKelvin = (tempCelius + 273.15);
    return tempKelvin;
}
console.log(ConvertCeliusToKelvin(84)); //84 C=357.15 K
console.log(ConvertCeliusToKelvin(95)); //95 C=368.15 K




// 1. Declare a function.
// 2. Use the formula K = ( F + 459.67 ) * 5/9 to perform the converion. Store the result into new variable name tempKelvin.
// 3. Return the calcuated value. (used return keyword)

function ConvertFahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5/9;
    return tempKelvin;
}
console.log('Fahrenheit to Kevin');
console.log(ConvertFahrenheitToKelvin(84)); //84 F=302.04 K
console.log(ConvertFahrenheitToKelvin(95)); //95 F=308.15 K
