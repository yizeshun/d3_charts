/**
 * Created by yizeshun on 2016/8/2.
 */
function Option(){
    this.title={
        text:"请输入标题",
        textStyle:{
            color:"black"
        },
        top:"20%",
        left:"50%"

    };
    this.legend={
        left:"5%",
        top:"5%"
    };
    this.series=[];
    this.tooltip={
        trigger: 'item'
    };
    this.toolbox = {
        feature: {
            saveAsImage: {}
        }
    };
    this.grid={
        left: '3%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    };
}

function OptionHasAxis(){
    Option.call(this);
    this.xAxis={
        type:"value"
    };
    this.yAxis={
        type:"value"
    }
    this.title.text="aaa"
}
OptionHasAxis.prototype=Object.create(Option.prototype);
OptionHasAxis.prototype.constructor=OptionHasAxis;


OptionHasAxis.prototype.solve=function(){

    this.title.text="有坐标轴的图";
};