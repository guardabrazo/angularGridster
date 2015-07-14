'use strict';
app.directive("donutChart", function() {
  function link(scope, element, attr){
    // put D3 code here

          var color = d3.scale.category10();
          var data = [10, 20, 30];
          var width = 300;
          var height = 300;
          var min = Math.min(width, height);
          // var svg = d3.select('body').append('svg');
          var svg = d3.select(element[0]).append("svg")
          .attr("width", "100%")
          .attr("height", "100%")

          // Making it responsive
          .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
          .attr('preserveAspectRatio','xMinYMin')

          var pie = d3.layout.pie().sort(null);
          var arc = d3.svg.arc()
                .outerRadius(min / 2 * 0.9)
                .innerRadius(min / 2 * 0.5);
              // svg.attr({width: width, height: height});

          var g = svg.append('g')
          // center the donut chart
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
                // add the <path>s for each arc slice
                g.selectAll('path').data(pie(data))
                  .enter().append('path')
            .style('stroke', 'white')
            .attr('d', arc)
            .attr('fill', function(d, i){ return color(i) });

  }
  return {
    link: link,
    restrict: "E"
  };
});
