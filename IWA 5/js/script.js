//variables we're not declared
const FREE_WARNING = 'Free shipping only applies to single customer orders'//
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

//variables we're not declared, i had to declare them as let so in future i can reassign them
let location = 'RSA'
let currency = 'R'
let shipping = 400
const customers = 1

//if user ships from RSA then true
if (location === 'RSA'){
    shipping === 400 && currency === 'R'
}

//else this fals
if (location === 'NMA') {
    shipping = 600
    currency = '$'

    shipping === 600 && currency === '$'
} else {
    shipping === 800
}

//vaariables we're not declared
const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

if (shoes + batteries + pens + shirts > 1000)
	if (location === 'NAM' && customers < 2)/*strict opeartor was not used*/{
        if (location === 'RSA')/*strict operator was not used*/
    shipping === 0 || shipping //type error i removed calc 
}

if (shipping === 0 && customers !== 1)/*values we're not in a one bracket*/{
    console.log(FREE_WARNING)
}

// if (location === 'NK'){
//     console.log(BANNED_WARNING)
// }

console.log('price', currency, shoes + batteries + toys + pens + shirts + shipping)

