'use strict';

export async function calculateDailyWages(event, context, callback) {

    // let Value = JSON.parse(event.body);
    let empHrs;
    let option = Math.floor(Math.random() * 2);
    if (option == 1) {
        console.log("Employee is present");
        empHrs = 8;
    } else {
        console.log("Employee is absent");
        empHrs = 0;
    }
    let dailyWage = empHrs * event['wage'];
    callback(null,`Employee wage is ${dailyWage}`)
}