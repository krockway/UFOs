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

function handleClick(){
    // Find the 1st element that matches #datetime & store it in "date" variable
    let date = d3.select("#datetime").property("value");
    //Set variable to default filter (aka no filter, just the raw data)
    let filteredData = tableData;

    // Check if a date was entered & filter based on that date
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` = filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // If no date  entered, then filteredData = original tableData.
    buildTable(filteredData);
};

// Listen for filter-btn to be clicked & then run handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);