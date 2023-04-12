const currentYear = new Date().getFullYear()
const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `1 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}
const christmas = 6
const futureId = 9
// Do not change code above this comment
console.log(`ID ${futureId} not created yet`)
console.log('')
const copied = {
    correctName: 'X-Mas',
    correctID: holidays[6].id,
    correctDate: holidays[6].date.setHours(0),
    correctDates: holidays[6].date.setMinutes(0),
    correctDatess: new Date(holidays[6].date)
}
//console.log(holidays)
const isEarlier = (copied.correctDate > holidays[6].date)
console.log('New date is earlier:', isEarlier)
console.log('')
if (isEarlier === true) {
    console.log('ID change:', holidays[6].id != copied.correctID)
    console.log('Name change:', copied.correctName)
    const days = copied.correctDatess.getDate()
    const months = copied.correctDatess.getMonth() + 1
    const years = copied.correctDatess.getFullYear()
    console.log(`Date change: ${days}/${months}/${years}`)
}
console.log('')
const firstHolidayTimestamp = Math.min(
    parseInt(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)
const lastHolidayTimestamp = Math.max(
    parseInt(holidays[0].date),
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
);
const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1
console.log(`0${firstDay}/0${firstMonth}/${(new Date(2030, 0, 9).getFullYear())}`)
console.log(`${lastDay}/${lastMonth}/${(new Date(2030, 0, 9).getFullYear())}`)
console.log('')
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex].name;
console.log(randomHoliday)