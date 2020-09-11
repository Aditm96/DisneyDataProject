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
//Create the Range for the X variables 
var FiveData = X.slice(-6, -1)
var WeekData = X.slice(-8, -1)
var MonthData = X.slice(-31, -1)
var TwoMonthData = X.slice(-62,-1)
var ThreeMonthData = X.slice(-93,-1)
var Reverse_ThreeMonth = ThreeMonthData.reverse()
var SixMonthData = X.slice(-183,-1)
var Reverse_SixMonth = SixMonthData.reverse()
var YearData = X.slice(-366,-1)
var Reverse_YearData = YearData.reverse()
var TwoYearData = X.slice(-731,-1)
var Reverse_TwoYearData = TwoYearData.reverse()
var ThreeYearData = X.slice(-1096,-1)
var Reverse_ThreeYearData = ThreeYearData.reverse()
var FiveYearData = X.slice(-1826,-1)
var Reverse_FiveYearData = FiveYearData.reverse()
var Reverse_TenYearData = X.reverse()

var Reverse_ThreeMonth = ThreeMonthData.reverse()
console.log(Reverse_ThreeMonth)

//Create the Range for the Y variables 
var ThreeMonthDigitRange = [];
for (var i = 1; i < 91; i++) {
  ThreeMonthDigitRange.push(i)
}
var SixMonthDigitRange = [];
for (var i = 1; i < 184; i++) {
  SixMonthDigitRange.push(i)
}
var YearDigitRange = [];
for (var i = 1; i < 367; i++) {
  YearDigitRange.push(i)
}
var FiveYearDigitRange = [];
for (var i = 1; i < 1097; i++) {
  FiveYearDigitRange.push(i)
}
var TenYearDigitRange = [];
for (var i = 1; i < 2686; i++) {
  TenYearDigitRange.push(i)
}
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
};

function init2() {
  Data = [{
    y: FiveData,
    x: [5,4,3,2,1]}];
  
    Plotly.newPlot("chartContainer", Data);
}

//Change the plot whenever the time_selector changes
d3.select("#sel2Dataset").on("change", updatePlotly);

//UpdatePlotly
function updatePlotly() {
  var dropdownMenu = d3.select("#sel2Dataset").node();
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.value;
  // Initialize x and y arrays
  var x = [];
  var y = [];

  switch(dataset) {
    case "5D":
      x = [5,4,3,2,1];
      y = FiveData;
      break;
    case "7D":
      x = [7,6,5,4,3,2,1];
      y = WeekData;
      break;
    case "1M":
      x = [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
      y = MonthData;
      break;
    case "3M":
      x = ThreeMonthDigitRange;
      y = Reverse_ThreeMonth;
      break;
    case "6M":
      x = SixMonthDigitRange;
      y = Reverse_SixMonth
    break;
    case "1Y":
      x = YearDigitRange;
      y = Reverse_YearData;
    break;
    case "5Y":
      x = FiveYearDigitRange;
      y = Reverse_FiveYearData;
    break;
    case "10Y":
      x = TenYearDigitRange;
      y = Reverse_TenYearData;
    break;

  }

  Plotly.restyle("chartContainer", "x", [x]);
  Plotly.restyle("chartContainer", "y", [y]);

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


