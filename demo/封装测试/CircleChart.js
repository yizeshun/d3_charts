/**
 * Created by Administrator on 2015-12-28.
 */
function CircleChart(options) {

    var width,
        height;

    var ele=options.ele||"body";

    var data=options.data||[];

    var svg=d3.select(ele).append("svg")
        .attr("width",width)
        .attr("height",height);

    function chart() {

        var circles=svg.selectAll(".circle")
            .data(data);

        circles.enter().append("circle")
            .attr("class","circle")
            .attr("cx",0)
            .attr("cy",height/2)
            .attr("r",30);

        circles.transition().duration(1000)
            .attr("cx",function(d,i){return (i+1)*100})
            .attr("cy",height/2);

        circles.exit().transition().duration(1000)
            .attr("cx",width);

    }

    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        svg.attr("width",width);
        return this;
    };

    chart.height=function(value){

        if(!arguments.length) return height;
        height=value;
        svg.attr("height",height);
        return this;

    };

    chart.width(options.width||700);
    chart.height(options.height||600);

    return chart;
}