//Task-1
// use the var keyword to declare a variable SpO2 set it to 92
let SpO2 = 92;


function Checkpulseoximeter(SpO2){
    if (SpO2 >= 96 ){
        console.log('Normal Reading.');
    } else if ( (SpO2 >= 93) && (SpO2 <= 94) ) {
        console.log('Seek advice from health professionals.');
    } else if ( SpO2 == 95 ){
        console.log('Acceptable to continue home monitoring.');        
    } else if ( SpO2 <= 92 ){
        console.log('Seek urgent medical advice.');        
    } 
}
Checkpulseoximeter(SpO2);
