// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// begin function to create the table.
function createTable (data) {
    tbody.html("");
    data.forEach(( row ) => {
        var datarow = tbody.append("tr");
        Object.values(row).forEach(( value ) => {
            var cell = datarow.append("td");
            cell.text(value)
        })
    })
}
// Call the createTable function to display data in the HTML body.
createTable(tableData);

/* Create a function to filter the javascript file
when the search date button is pressed */

function searchTable () {
    var date = d3.select("#datetime").property("value");
    if (date)  {
        var filterdata = tableData.filter(row => row.datetime === date);
    } 
    console.log(filterdata);
    createTable(filterdata);
}
// Call the function to run the filter when the search button is "clicked" by the user
d3.selectAll("#filter-btn").on("click", searchTable);