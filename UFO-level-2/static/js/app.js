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
    //Create multi
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value").toLowerCase();
    var state = d3.select("#state").property("value").toLowerCase();
    var country = d3.select("#country").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();
    if (date.length > 0)  {
        var filterdata = tableData.filter(row => row.datetime === date);
        console.log(filterdata);
    }
    if (city.length > 0)  {
        var filterdata = tableData.filter(row => row.city === city);
        console.log(filterdata);
    } 
    if (state.length > 0)  {
        var filterdata = tableData.filter(row => row.state === state);
        console.log(filterdata);
    } 
    if (country.length > 0)  {
        var filterdata = tableData.filter(row => row.country === country);
        console.log(filterdata);
    } 
    if (shape.length > 0)  {
        var filterdata = tableData.filter(row => row.shape === shape);
        console.log(filterdata);
    } 
    console.log(filterdata);
    createTable(filterdata);
}
// Call the function to run the filter when the search button is "clicked" by the user
d3.selectAll("#filter-btn").on("click", searchTable);

createTable(tableData);