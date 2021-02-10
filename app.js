// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 135},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json("./career.json", function(data) {
  // Add X axis
  var x = d3.scaleLinear()
    .domain([2012, 2021])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
      .tickFormat(d3.format("d")));

  // Y axis
  var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.track; }))
    .padding(1);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add a scale for bubble size
  var z = d3.scaleLinear()
    .domain([0, 2])
    .range([ 4, 40]);

  // Add a scale for bubble color
  var myColor = d3.scaleOrdinal()
    .domain(["CNA Insurance", "Allstate", "Loyola University Chicago", "Northwestern University", "Certification", 
    "Conference Speaker", "Adopted a Pet", "Athletics", "Personal"])
    .range(["ec4646", "23689b", "#c05555", "726a95", "99bbad", "ffee93", "a0c1b8", "314e52", "719fb0"]);

  // -1- Create a tooltip div that is hidden by default:
  var tooltip = d3.select("#my_dataviz")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "#4acaa8")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("This Node: " + d.label + "<br> Highlight: "+ d.desc )
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("background-color", "#4acaa8")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("background-color", "#4acaa8")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
    .style("opacity", 1)
    .html("Hover over a bubble to see what I was up to")
    .style("background-color", "grey")
    .style("left", (d3.mouse(this)[0]+30) + "px")
    .style("top", (d3.mouse(this)[1]+30) + "px")
  }

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", "bubbles")
      .attr("cx", function (d) { return x(d.year); } )
      .attr("cy", function (d) { return y(d.track); } )
      .attr("r", function (d) { return z(d.size); } )
      .style("fill", function (d) { return myColor(d.label); } )
    // -3- Trigger the functions
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )
    


  })