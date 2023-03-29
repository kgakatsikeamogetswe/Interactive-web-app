/**
* I changed data types from Public and Private to Const
* role was not not exported
*/

const firstname = "Nwabisa" 
const surname = "Gabe"
export const roleN = "CEO"

const display= firstname + " " + surname + " (" + roleN + ")"
document.querySelector('#nwabisa').innerText = display