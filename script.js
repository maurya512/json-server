// ! the basic method to display all the lists on the page
function fetchLists() {

    // * fetching all the posts using fetch api
    fetch("http://localhost:3000/events")
        .then((response) => response.json())
        .then((json) => {
            // ! logging the data to see if runs into any error
            console.log(json)
            // ! initialize the empty table to populate
            var table = document.getElementById("myTable");

            // ! looping over the json file to dynamically create elements based on the post requirement for all the items in the list
            for (var i = 0; i < json.length; i++) {
                // ! iniatilizing a row and defining elements
                var row = `
                <tr>
                <td>${json[i].eventName}</td>
                <td>${json[i].startDate}</td>
                <td>${json[i].endDate}</td>
                <td>
                <button>EDIT</button>
                <button>DELETE</button>
                </td>
                </tr>
                `
                table.innerHTML += row;
            }
        });
}

// ! a fetch method to add items to the list
function addItems(e) {
    e.preventDefault();

    let newTask = document.getElementById('newTask').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value

    fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            eventName: newTask,
            startDate: startDate,
            endDate: endDate
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            for (var i = 0; i < json.length; i++) {
                // ! iniatilizing a row and defining elements
                var row = `
                <tr>
                <td>${json[i].eventName}</td>
                <td>${json[i].startDate}</td>
                <td>${json[i].endDate}</td>
                <td>
                <button>EDIT</button>
                <button>DELETE</button>
                </td>
                </tr>
                `
                table.innerHTML += row;
            }
        });
}

// ! deleting a post
// * create a function that takes in an id
// let delBtn = document.getElementById('delItem')
// delBtn.addEventListener('click', () => {
//     // * pass that id into the fetch method using template literals 
//     fetch(`http://localhost:3000/events/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//         },
//     })
//         .then((res) => res.json())
//         .then((json) => {
//             // ! logic to delete the items 
//             // * if the id passed in the function matches with an id of one the posts we will delete that post
//             console.log(json)
//         });
// })

// // ! updating a post 
// let editBtn = document.getElementById('editItem')
// editBtn.addEventListener('click', () => {
//     // ! getting info from the user 
//     const updatePost = {
//         eventName: '',
//         startDate: '',
//         endDate: ''
//     }
//     // * following the update post route
//     fetch("http://localhost:3000/events/2", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify({
//             eventName: "TEST-CHANGED",
//             startDate: "1641790800000",
//             endDate: "1641790800000",
//         }),
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// })



// ! adding an eventlistener to laod the posts and call the function to fetch all the items in the lists
window.addEventListener('load', fetchLists)
document.getElementById('form').addEventListener('submit', addItems)