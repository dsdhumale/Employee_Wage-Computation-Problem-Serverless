'use strict';

export const calculateMonthlyWage = async(event) =>{
    // let Value = JSON.parse(event.body);
    let empHrs;
    let dailyWage;
    let totalEmpWage = 0;
    for (let day = 0; day <= event['workingDay']; day++) {
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
    dailyWage = empHrs * event['wage'];
    totalEmpWage += dailyWage;
}
    return `Total Employee wage for month is ${totalEmpWage}`
}