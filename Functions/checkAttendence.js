'use strict';

export async function employeeAttendance(event,context,callback) {
let Value = JSON.parse(event.body);
// console.log(event.body);
// console.log(Value.value);

    let option =Math.floor(Math.random() * 2);
  //  if (option == event['value']) {
    if (option == Value.value) {
    callback(null,"Employee is Present....") ;
  } else {
    callback(null,"Employee is Absent....") ;
  }
}