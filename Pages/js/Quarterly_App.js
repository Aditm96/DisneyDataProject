// from DisneyData.js
var tableData = Data;

//Use a for loop to get the data from the JSON file
//Define the Sum variables 
var sum_open = 0;
var sum_high = 0;
var sum_low = 0;
var sum_close = 0;
var sum_volume = 0;
// Define Arrays 
var Quarter_Data = [];
var Quarter_Data_Array = [];
var Q_open = [];
var high = [];
var low = [];
var Q_close = [];
var volume = [];

for (var x = 0; x < tableData.length; x++) {
  var QuarterData = tableData[x];
  Quarter_Data.push(QuarterData)
};

//Create Quarter Array
var Quarter_Set = ['2010 Q1', '2010 Q2', '2010 Q3', '2010 Q4', '2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4',
'2013 Q1', '2013 Q2','2013 Q3','2013 Q4', '2014 Q1', '2014 Q2', '2014 Q3', '2014 Q4', '2015 Q1', '2015 Q2', '2015 Q3', '2015 Q4', '2016 Q1',
'2016 Q2', '2016 Q3', '2016 Q4', '2017 Q1', '2017 Q2', '2017 Q3', '2017 Q3', '2017 Q4', '2018 Q1', '2018 Q2', '2018 Q3', '2018 Q4',
'2019 Q1', '2019 Q2', '2019 Q3', '2019 Q4', '2020 Q1', '2020 Q2', '2020 Q3']

//Populate the Drop bar with the Quarter Array
function init() {
  var selector = d3.select("#selDataset");
  Quarter_Set.forEach((Stocks) => {
  selector
    .append("option")
    .text(Stocks)
    .property("value", Stocks)
  })
};

function updateData(StockData) {
  var selector = d3.select("#selDataset");
  var inputValue = selector.property("value");
  if (inputValue == '2010 Q1') {
    for (var x = 0; x < 61; x++) {
      var QuarterData = tableData[x]
      sum_open += QuarterData.open
      sum_close += QuarterData.close
      sum_high += QuarterData.high
      sum_low += QuarterData.low
      sum_volume += QuarterData.volume
      Q_open.push(QuarterData)
      high.push(QuarterData.high)
      low.push(QuarterData.low)
      Q_close.push(QuarterData.close)
      volume.push(QuarterData.volume)
      var average_sum = sum_open/Q_open.length
      var average_close = sum_close/Q_close.length
      var average_high = sum_high/high.length
      var average_low = sum_low/low.length
      var average_volume = sum_volume/volume.length
    };
    
    Quarter_Data_Array.push("2010 Q1", average_sum, average_close, average_high, average_low, average_volume)
    console.log(inputValue);
    console.log(Quarter_Data_Array)
    
    var tbody = d3.select("#FilteredDisneyQuarterTable");
    Quarter_Data_Array.forEach(function(FilteredDisneyData) {
      var row = tbody.append("tr") 
      Object.entries(FilteredDisneyData).forEach(function([key, value]) {
        console.log(key, value);   
        var cell = row.append("td");
        cell.text(value);
      });
    })  
  };  
};

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  updateData(newSample);
};

init();
