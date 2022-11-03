const myFunctions =require("./function");

test("The BMI result is ", () => {    
    expect(myFunctions.ComputeBMI(175,80)).toBe(26.122448979591837) //26.12
});

test("The BMI status is ", () => {    
    expect(myFunctions.BMI_Status(26)).toBe('You are healthy weight') 
});