/**
* I changed data types from Public and Private to Const
* role was not not exported
*/

const firstname = "Alex"
const surname = "Naidoo"
export const roleA = "Head of Marketing"

const display= firstname + " " + surname + " (" + roleA + ")"
document.querySelector('#alex').innerText = display

