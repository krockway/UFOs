// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the table
function buildTable(data) {
    //clear the whole table
    tbody.html("");

    // Loop through each object in the data
    data.forEach((dataRow) => {
        // Find tbody and add row
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        //forEach(val) means 1 object per row
        Object.values(dataRow).forEach((val) => {
            // Add data to each cell
            let cell = row.append("td");
            cell.text(val);
        });
    });
};