// ! grabbing all the fields from the html file

let newTask = document.getElementById('newTask').value
let startDate = document.getElementById('startDate').value
let endDate = document.getElementById('endDate').value
let addTask = document.getElementById('addTask');
let myTable = document.getElementById('myTasks');

// ! storing the basic url in a variable to allow easy access
// const url = "http://localhost:3000/events"

// * method to get all the tasks and displaying them on the screen
// function fetchTasks() {
//     fetch("http://localhost:3000/events")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             data.forEach((user) => {
//                 newTask.innerText += user.eventName;
//                 console.log(newTask);
//                 startDate.innerText += user.startDate;
//                 console.log(startDate);
//                 endDate.innerText += user.endDate;
//             })
//         })
// }

// ! invoking the loading of all tasks whenever the page is loaded
// window.addEventListener('load', fetchTasks);
// // <!-- <script>
//   // Get all Events
//   fetch("http://localhost:3000/events")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// Create a new Event
fetch("http://localhost:3000/events", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        eventName: newTask,
        //  ! method to pick current date 
        startDate: Date.now(),
        endDate: endDate
    }),
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//   // Delete an exist Event
//   fetch("http://localhost:3000/events/1", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

//   //   // Update an exist Event
//   fetch("http://localhost:3000/events/2", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       eventName: "TEST-CHANGED",
//       startDate: "1641790800000",
//       endDate: "1641790800000",
//     }),
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// </script> -->

// window.addEventListener('load', fetchTasks);
addTask.addEventListener('submit', (e) => {
    // ! prevents the page from reloading everytime a task is added
    e.preventDefault()
})
