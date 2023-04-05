const nickname= "Timmy";
const firstname = "Timothy";
const value =  (`${nickname || firstname}`)

if (value == undefined){
    console.log("Good morning!")
}else{
console.log("Good morning,", value)
    
}

