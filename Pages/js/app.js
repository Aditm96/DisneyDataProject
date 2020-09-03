// from DisneyData.js
var tableData = Data;

//Create Arrays
var Stock_Date = [];
var X = [];

//For Loop to Populate the Arrays
for (var i = 0; i < tableData.length; i++) {
  var StockDate = tableData[i];
  Stock_Date.push(StockDate.date)
};

for (var x = 0; x < tableData.length; x++) {
  var ClosingPrice = tableData[x];
  X.push(ClosingPrice.close)
}

//Part 1: The Graph by Time
//Dropdown Options
var Time = ['5D', '7D', '1M', '2M', '3M', '6M', '1Y', '2Y', '3Y', '5y', '10Y']

//Create the Range for the X variables 
var FiveData = X.slice(-6, -1)
var WeekData = X.slice(-8, -1)
var MonthData = X.slice(-31, -1)
var TwoMonthData = X.slice(-62,-1)
var ThreeMonthData = X.slice(-93,-1)
var SixMonthData = X.slice(-183,-1)
var YearData = X.slice(-366,-1)
var TwoYearData = X.slice(-731,-1)
var ThreeYearData = X.slice(-1096,-1)
var FiveYearData = X.slice(-1826,-1)

//Create the Range for the Y variables 
var FiveDate = Stock_Date.slice(-6, -1)
var WeekDate = Stock_Date.slice(-8, -1)
var MonthDate = Stock_Date.slice(-31, -1)
var TwoMonthDate = Stock_Date.slice(-62,-1)
var ThreeMonthDate = Stock_Date.slice(-93,-1)
var SixMonthDate = Stock_Date.slice(-183,-1)
var YearDate = Stock_Date.slice(-366,-1)
var TwoYearDate = Stock_Date.slice(-731,-1)
var ThreeYearDate = Stock_Date.slice(-1096,-1)
var FiveYearDate = Stock_Date.slice(-1826,-1)


console.log(FiveData)
console.log(FiveDate)

console.log(Stock_Date)

//Initialize the Data
function init() {
  var selector = d3.select("#selDataset");
  Stock_Date.forEach((Stocks) => {
  selector
    .append("option")
    .text(Stocks)
    .property("value", Stocks)
  })
  var Time_Selector = d3.select("#sel2Dataset");
  Time.forEach((TimeStock) => {
    Time_Selector
      .append("option")
      .text(TimeStock)
      .property("value", TimeStock)
  })

};

function init2() {
  Data = [{
    y: FiveData,
    x: [1,2,3,4,5]}];
  
    Plotly.newPlot("chartContainer", Data);
}




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
init2();

function optionChanged2(newSample) {
  // Fetch new data each time a new sample is selected
  updateTimeData(newSample);
};
