const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",
    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },
      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};


// Only edit below this comment
// Define a function called createHtml that takes an argument called athlete
const createHtml = (athlete) => {

  // Reassign the following variables from data object, using the athlete argument to access the correct index
  const firstName = data.response.data[athlete].firstName;
  const surname = data.response.data[athlete].surname;
  const id = data.response.data[athlete].id;
  const races = (data.response.data[athlete].races).length;
  const date = new Date(data.response.data[athlete].races[races-1].date);
  const time = data.response.data[athlete].races[races-1].time;
  
  // Create a new document fragment
  const fragment = document.createDocumentFragment();

  // Create a new h2 element and set its text content to the athlete's ID
  let title = document.createElement('h2');
  title.textContent = id;
  
  // Append the h2 element to the fragment
  fragment.appendChild(title);

  // Create a new definition list element
  const list = document.createElement('dl');

  // Get the day, month, and year from the date object
  const day =  date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  // Calculate the total time by iterating through the time array and adding up all the values
  let sum = 0;
  let i = 0;
  while ( i < time.length ) {
    sum += time[i];
    i++;
  }

  // Convert the total time to minutes and hours
  const minutes = sum % 60;
  const hours = (sum - minutes) / 60;

  //display athlete's information in definition list
  list.innerHTML = /* html */ `
      <dt>Athlete: ${firstName +' '+ surname}</dt>
      <dt>Total Races: ${races}</dt>
      <dt>Event Date (Latest): ${day.toString().padStart(2, '0')+' '+ month +' '+ year}</dt>
      <dt>Total Time (Latest): ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dt>
    `;

  // Append the definition list to the fragment
  fragment.appendChild(list);

  // Return the document fragment
  return fragment;
}

// Find the elements with data-athlete attributes, and append the createHtml function output to them
document.querySelector('[data-athlete = "NM372"]').appendChild(createHtml('NM372'));
document.querySelector('[data-athlete ="SV782"]').appendChild(createHtml('SV782'));