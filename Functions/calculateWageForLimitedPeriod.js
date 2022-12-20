'use strict';

export const calculateWageForLimitedPeriod = async(event,context,callback) =>{
    let Value = JSON.parse(event.body);
    let empHrs;
    let dailyWage;
    let totalEmpWage = 0;
    let totalEmpHrs =0;
    let totalWorkingDays = 0;
    while (totalEmpHrs < event['maxHrs'] && totalWorkingDays < event['workingDay']) {
        totalWorkingDays++;
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
    totalEmpHrs += empHrs;
}
    callback(null,`Total Employee wage for month is ${totalEmpWage}`);
}