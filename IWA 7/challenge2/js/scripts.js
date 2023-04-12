/**
 * The code was displaying Good morning text only
 */

const nickname= "";
const firstname = "Timothy";
const value =  (`${nickname || firstname}`)//I declared my value and assigned it to Interpolation

if (value == undefined){
    console.log("Good morning!")//This will output a Good morning text if there's no both first and nickname
}else{
console.log("Good morning,", value)//This will output Good morning and value
    
}

