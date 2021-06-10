// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// begin function to create the table.
function createTable (data) {
    tbody.html("");
    data.forEach(function(UFO) {
        var datarow = tbody.append("tr");
        Object.entries(UFO).forEach(([key, value]) => {
            var cell = datarow.append("td");
            cell.text(value)
        })
    })
};
// Call the createTable function to display data in the HTML body.
createTable(tableData);

/* Create a function to filter the javascript file
when the search date button is pressed */

function searchTable () {
    //Create multi
    var inputDate = d3.select("#datetime").property("value").toLowerCase();
    var inputCity = d3.select("#city").property("value").toLowerCase();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    if (inputDate.length > 0)  {
        var filterdata = tableData.filter(row => row.datetime === inputDate);
        console.log(filterdata);
        }
    if (inputCity.length > 0)  {
        var filterdata = tableData.filter(row => row.city === inputCity);
        console.log(filterdata);
    } 
    if (inputState.length > 0)  {
        var filterdata = tableData.filter(row => row.state === inputState);
        console.log(filterdata);
    } 
    if (inputCountry.length > 0)  {
        var filterdata = tableData.filter(row => row.country === inputCountry);
        console.log(filterdata);
    } 
    if (inputShape.length > 0)  {
        var filterdata = tableData.filter(row => row.shape === inputShape);
        console.log(filterdata);
    } 
    createTable(filterdata);
}
// Call the function to run the filter when the search button is "clicked" by the user
d3.selectAll("#filter-btn").on("click", searchTable);

createTable(tableData);