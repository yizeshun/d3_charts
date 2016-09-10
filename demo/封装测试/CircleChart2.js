/**
 * Created by Administrator on 2015-12-28.
 */
function CircleChart(options) {

    this.width=options.width||720;
    this.height=options.height||600;
    this.ele=options.ele||"body";
    this.data=options.data||[];
    this.svg=d3.select(this.ele).append("svg")
               .attr("width",this.width)
               .attr("height",this.height);


}

CircleChart.prototype.chart=function(){

    var circles=this.svg.selectAll(".circle")
        .data(this.data);

    circles.enter().append("circle")
        .attr("class","circle")
        .attr("cx",0)
        .attr("cy",this.height/2)
        .attr("r",30);

    circles.transition().duration(1000)
        .attr("cx",function(d,i){return (i+1)*100})
        .attr("cy",this.height/2);

    circles.exit().transition().duration(1000)
        .attr("cx",this.width);


};

CircleChart.prototype.setWidth=function(value){

    if(arguments.length&&value>0)

    this.width=value;

    this.svg
        .attr("width",this.width);

};

CircleChart.prototype.setHeight=function(value){

    if(arguments.length&&value>0)

        this.height=value;

    this.svg
        .attr("height",this.height);

};