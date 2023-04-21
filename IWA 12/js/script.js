const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}
// Edit below line
const book = document.querySelector('#book1')
const reserveBtn = book.querySelector('.reserve')
const checkoutBtn = book.querySelector('.checkout')
const checkinBtn = book.querySelector('.checkin')
const statusText = book.querySelector('.status')
// Get the current status of the book
const currentStatus = statusText.textContent
// Update the buttons based on the current status
reserveBtn.disabled = !STATUS_MAP[currentStatus].canReserve;
checkoutBtn.disabled = !STATUS_MAP[currentStatus].canCheckout;
checkinBtn.disabled = !STATUS_MAP[currentStatus].canCheckIn
// Set the color of the status text based on the current status
statusText.style.color = STATUS_MAP[currentStatus].color
// Set the checkin button to grayscale
checkinBtn.style.color = ''


const book2 = document.querySelector('#book2')
const reserveBtn2 = book2.querySelector('.reserve')
const checkoutBtn2 = book2.querySelector('.checkout')
const checkinBtn2 = book2.querySelector('.checkin')
const statusText2 = book2.querySelector('.status')
// Get the current status of the book
const currentStatus2 = statusText2.textContent
// Update the buttons based on the current status
reserveBtn2.disabled = !STATUS_MAP[currentStatus2].canReserve
checkoutBtn2.disabled = !STATUS_MAP[currentStatus2].canCheckout
checkinBtn2.disabled = !STATUS_MAP[currentStatus2].canCheckIn
// Set the color of the status text based on the current status
statusText2.style.color = STATUS_MAP[currentStatus2].color
// Set the checkin button to grayscale
checkinBtn2.style.color = ''
const book3 = document.querySelector('#book3')
const reserveBtn3 = book3.querySelector('.reserve')
const checkoutBtn3 = book3.querySelector('.checkout')
const checkinBtn3 = book3.querySelector('.checkin')
const statusText3 = book3.querySelector('.status')
// Get the current status of the book
const currentStatus3 = statusText3.textContent
//Update the buttons based on the current status
reserveBtn3.disabled = !STATUS_MAP[currentStatus3].canReserve
checkoutBtn3.disabled = !STATUS_MAP[currentStatus3].canCheckout
checkinBtn3.disabled = !STATUS_MAP[currentStatus3].canCheckIn
// Set the color of the status text based on the current status
statusText3.style.color = STATUS_MAP[currentStatus3].color
// Set the checkin button to grayscale
checkinBtn3.style.color = ''