//Task-2
// use the var keyword to declare a variable SpO2 set it to 40
let SpO2 = 101;


function Checkpulseoximeter(SpO2){
    if (SpO2 >= 131 ){
        console.log('Seek urgent medical advice.');
    } else if ( (SpO2 >= 110) && (SpO2 <= 130) ) {
        console.log('Seek advice from health professionals.');
    } else if ( (SpO2 >= 101) && (SpO2 <= 109) ) {
        console.log('Acceptable to continue home monitoring.');        
    } else if ( (SpO2 >= 40) && (SpO2 <= 101) ) {
        console.log('Normal reading.');        
    } 
}
Checkpulseoximeter(SpO2);
