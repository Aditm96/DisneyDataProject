// from DisneyData.js
var tableData = Data;

var Year = [];
for (var i = 0; i < tableData.length; i++) {
  var StockDate = tableData[i];
  Year.push(StockDate.date)
};

console.log(Year)


