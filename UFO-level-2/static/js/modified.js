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
var filter = {}

function searchTable () {
    //Create multi search
    var inputData = d3.select(this);
    var inputValue = inputData.property('value').trim();
    var inputID = inputData.attr('id');
    if (inputData) {
        filter[inputID] = inputValue;
    }
    else {
        delete filter[inputID];
    } 
    filterData ();
}
function filterData () {
    Object.entries(filter).forEach(([key, value])=> {
        fildata = tableData.filter(row => row[key] === value);
    })
        createTable(fildata)
    if (fildata == null) {
        window.confirm("No Sightings Claimed");
        console.log("I didn't run")
    }
}
    
//     if (inputDate.length > 0)  {
//         var filterdata = tableData.filter(row => row.datetime === inputDate);
//         console.log(filterdata);
//         }
//     if (inputCity.length > 0)  {
//         var filterdata = tableData.filter(row => row.city === inputCity);
//         console.log(filterdata);
//     } 
//     if (inputState.length > 0)  {
//         var filterdata = tableData.filter(row => row.state === inputState);
//         console.log(filterdata);
//     } 
//     if (inputCountry.length > 0)  {
//         var filterdata = tableData.filter(row => row.country === inputCountry);
//         console.log(filterdata);
//     } 
//     if (inputShape.length > 0)  {
//         var filterdata = tableData.filter(row => row.shape === inputShape);
//         console.log(filterdata);
//     } 
//     createTable(filterdata);
// }
// Call the function to run the filter when the search button is "clicked" by the user
d3.selectAll("input").on("change", searchTable);

function refreshTable () {
    console.log("I'm working");
    createTable(tableData);
}

function clearTable () {

}
d3.selectAll("#filter-btn").on("click", refreshTable);

createTable(tableData);