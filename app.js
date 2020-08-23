// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("#SpaceData");
console.log(data)
data.forEach(function(SpaceData) {
    console.log(SpaceData);
    var row = tbody.append("tr")

    Object.entries(SpaceData).forEach(function([key, value]) {
        console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
    });
});
