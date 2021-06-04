// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

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

createTable(tableData);

function searchTable () {
    var date = d3.select("#datetime").property("value");
    if (date)  {
        var filterdata = tableData.filter(row => row.datetime === date);
    } 
    console.log(filterdata);
    createTable(filterdata);
}

d3.selectAll("#filter-btn").on("click", searchTable);