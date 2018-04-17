    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
        return "<h4>"+n+"</h4><table>"+
            "<tr><td>Number of Shootings</td><td>"+(d.numShoot)+"</td></tr>"+
            "</table>";
    }


    var shootList = {"WA": 48, "DE": 29, "DC": 7, "WI": 68, "WV": 19, 
        "HI": 2, "FL": 113, "WY": 3, "NH": 6, "NJ": 80, "NM": 14, "TX": 139, 
        "LA": 44, "NC": 90, "ND": 4, "NE": 12, "TN": 56, "NY": 92, "PA": 191, 
        "CA": 315, "NV": 20, "VA": 58, "CO": 240, "AK": 16, "AL": 54, "AR": 29, 
        "VT": 7, "IL": 101, "GA": 61, "IN": 67, "IA": 30, "OK": 35, "AZ": 35, "ID": 4, 
        "CT": 27, "ME": 8, "MD": 52, "MA": 40, "OH": 105, "UT": 18, "MO": 54, "MN": 34,
         "MI": 58, "RI": 8, "KS": 37, "MT": 17, "MS": 27, "SC": 65, "KY": 36, "OR": 28, "SD": 3}
    

    var stateShooting ={}; /* Sample random data. */   
    ["AK","AL","AR","AZ","CA","CO","CT","DC",
    "DE","FL","GA","HI","IA","ID","IL","IN",
    "KS","KY","LA","MA","MD","ME","MI","MN",
    "MO","MS","MT","NC","ND","NE","NH","NJ",
    "NM","NV","NY","OH","OK","OR","PA","RI",
    "SC","SD","TN","TX","UT","VA","VT","WA",
    "WI","WV","WY"]
        .forEach(function(d){ 
            //console.log(d)
            //console.log(realShootList[d])
            var x = shootList[d];
            // original colors ("#ffffcc", "#800026")
            stateShooting[d]={numShoot:x, color:d3.interpolate("#ffffcc", "#800026")(x/100)}; 
        });
    
    /* draw states on id #statesvg */   
    uStates.draw("#statesvg", stateShooting, tooltipHtml);
    
    d3.select(self.frameElement).style("height", "600px"); 




var data = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
];

//  margin, radius, and color scale
var m = 10,
    r = 100,
    z = d3.scale.category20c();
	
	
var svg = d3.select("body").selectAll("svg")
    .data(data)
  .enter().append("svg")
    .attr("width", (r+m)*2)
    .attr("height", (r + m) * 2)
  .append("g")
    .attr("transform", "translate(" + (r+m) + "," + (r+m+5) + ")");

svg.selectAll("path")
    .data(d3.layout.pie())
  .enter().append("path")
    .attr("d", d3.svg.arc()
        .innerRadius(r / 2)
        .outerRadius(r))
    .style("fill", function(d, i) { return z(i); });
	