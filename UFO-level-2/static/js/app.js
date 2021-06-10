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
button.on("click", () => {
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value").trim();
    var inputCity = d3.select("#city").property("value").toLowerCase().trim();
    var inputState = d3.select("#state").property("value").toLowerCase();
    var inputCountry = d3.select("#country").property("value").toLowerCase();
    var inputShape = d3.select("#shape").property("value").toLowerCase();
    if (inputDate.length > 0)  {
        var filterdata = tableData.filter(tableData => tableData.datetime === inputDate);
        console.log(filterdata);
        }
    if (inputCity.length > 0)  {
        var filterdata = tableData.filter(tableData => tableData.city === inputCity);
        console.log(filterdata);
    } 
    if (inputState.length > 0)  {
        var filterdata = tableData.filter(tableData => tableData.state === inputState);
        console.log(filterdata);
    } 
    if (inputCountry.length > 0)  {
        var filterdata = tableData.filter(tableData => tableData.country === inputCountry);
        console.log(filterdata);
    } 
    if (inputShape.length > 0)  {
        var filterdata = tableData.filter(tableData => tableData.shape === inputShape);
        console.log(filterdata);
    } 

// Call the function to run the filter when the search button is "clicked" by the user
$tbody.html("")

let response = {
    inputDate, inputCity, inputCombinedData
}
// Top if only works for filtering the date
// Need to accommodate for combining multiple filters, needed to create a new var for it
if(response.filterCombinedData.length !== 0) {
    addData(filterCombinedData);
}
    else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
        addData(filterDate) || addData(filterCity);
    }
    else {
        $tbody.append("tr").append("td").text("No results");
    }
})