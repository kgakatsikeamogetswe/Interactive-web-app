/**
 * The was no use of curly brackets
 * They didn't call out both variable in the same line
 * the was no .js extantion varible for configuration and it was not located 
 */

import {company , year} from './configuration.js'


const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
