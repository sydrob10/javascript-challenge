// assign the data from data.js to a variable
let tableData = data;

// get reference to the table body
let table = d3.select("table");
let tbody = d3.select("tbody");
table.attr("class", "table table-striped");

// print the data to console to double check
console.log(tableData);

// loop through data and add each report to the table
tableData.forEach((item) => {
  let row = tbody.append("tr");
  row.append("td").text(item.datetime);
  row.append("td").text(item.city);
  row.append("td").text(item.state);
  row.append("td").text(item.country);
  row.append("td").text(item.shape);
  row.append("td").text(item.durationMinutes);
  row.append("td").text(item.comments);
});

// select the filter table button and create event handler
let button = d3.select("#filter-btn");
button.on("click", runEnter);

// select the form and create event handler
let form = d3.select("#form");
form.on("submit", runEnter);

// complete the event handler function to filter the table
function runEnter() {

  // select the input box and get the raw html node
  let inputBox = d3.select("#datetime");

  // select the value of the input box, giving you the text inside the box
  let inputValue = inputBox.property("value");

  // use the form input to filter the data by date
  let newData = tableData.filter(item => item.datetime === inputValue)
  console.log(newData)
}
