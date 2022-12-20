
'use strict';

export const calculateWageForPartTime = async(event) =>{
    // let Value = JSON.parse(event.body);
    let empHrs;
    let option = Math.floor(Math.random() * 3);
    if (option == 1) {
        console.log("Employee is present");
        empHrs = 8;
    } else if(option == 2){
        console.log("Employee is part time worker");
        empHrs = 4;
    }else {
        console.log("Employee is absent");
        empHrs = 0;
    }
    let dailyWage = empHrs * event['wage'];
    return `Employee wage is ${dailyWage}`
}