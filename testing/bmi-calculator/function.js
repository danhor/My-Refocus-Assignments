const myFunction = {
    ComputeBMI: function(a, b){        
        return (b / (a * a) * 10000);
    },
    BMI_Status: function(nResult){
        if(nResult <= 24.9){
            return 'You are underweight';
        } else if(nResult >= 25 && nResult <= 29.9){
            return 'You are healthy weight';
        } else {
            return 'You are overweight';
        }
    }
};

module.exports = myFunction;