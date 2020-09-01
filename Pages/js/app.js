// from DisneyData.js
var tableData = Data;

var Stock_Date = [];

for (var i = 0; i < tableData.length; i++) {
  var StockDate = tableData[i];
  Stock_Date.push(StockDate.date)
};
console.log(Stock_Date)
function init() {
  var selector = d3.select("#selDataset");
  Stock_Date.forEach((Stocks) => {
  selector
    .append("option")
    .text(Stocks)
    .property("value", Stocks)
  })
};

function updateData(StockData) {
  var selector = d3.select("#selDataset");
  var inputValue = selector.property("value");
  console.log(inputValue);
  var FilterDate = tableData.filter(DateFiltered => DateFiltered.date == inputValue);
  console.log(FilterDate);
  var tbody = d3.select("#FilteredDisneyTable");
  FilterDate.forEach(function(FilteredDisneyData) {
    var row = tbody.append("tr") 
    Object.entries(FilteredDisneyData).forEach(function([key, value]) {
      console.log(key, value);   
      var cell = row.append("td");
      cell.text(value);
    });
  })
};

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  updateData(newSample);
};

init();
