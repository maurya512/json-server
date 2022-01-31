// ! grabbing all the fields from the html file

let newTask = document.getElementById('newTask');
let startDate = document.getElementById('startDate');
let endDate = document.getElementById('endDate');

// ! storing the basic url in a variable to allow easy access
const url = "http://localhost:3000/events"

// * method to get all the tasks and displaying them on the screen
fetch(url)
.then((res) => res.json() )
.then((json) => console.log(json))

