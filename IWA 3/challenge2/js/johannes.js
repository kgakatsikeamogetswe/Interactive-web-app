/**
* I changed data types from Public and Private to Const
* role was not not exported
*/

const firstname = "Johannes"
const surname = "Potgieter"
export const roleJ = "Intern"

const display= firstname + " " + surname + " (" + roleJ + ")"
document.querySelector('#johannes').innerText = display