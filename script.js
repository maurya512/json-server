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
        .then((json) => console.log(json));

}
// ! adding an eventlistener to laod the posts and call the function to fetch all the items in the lists
window.addEventListener('load', fetchLists)
document.getElementById('form').addEventListener('submit', addItems)