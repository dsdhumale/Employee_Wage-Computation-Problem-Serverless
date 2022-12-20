'use strict';

export const calculateWagesUsingSwitchCase = async(event) =>{
    // let Value = JSON.parse(event.body);
    let empHrs;
    let option = Math.floor(Math.random() * 3);
    switch (option) {
        case 1:
            empHrs = 8;
            break;
        case 2:
            empHrs = 4;
            break;
        default:
            empHrs = 0;
    }
    let dailyWage = empHrs * event['wage'];
    return `Employee wage is ${dailyWage}`
}