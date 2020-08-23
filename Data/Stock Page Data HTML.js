var button = d3.select('#button');

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    var inputDate = d3.select("#date-form-input");
    var inputValue = inputDate.property("value");
    console.log(inputValue);

    var FilterDate = tableData.filter(DateFiltered => DateFiltered.datetime == inputValue);
    console.log(FilterDate);

    var tbody = d3.select("#FilteredSpaceTable");
    FilterDate.forEach(function(FilteredSpaceData) {
        var row = tbody.append("tr") 
        Object.entries(FilteredSpaceData).forEach(function([key, value]) {
            console.log(key, value);   
        var cell = row.append("td");
        cell.text(value);
        });
    })
};
