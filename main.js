//图表参数
var ylChar = {
	init:function(targetId,option){
        // 基于准备好的dom，初始化echarts实例
         var myChart = echarts.init(document.getElementById(targetId));
      // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
	   },
    bar:function(targetId,json){
        // 指定图表的配置项和数据
        var option = {
            animation:false,
            title: {
                text: json.title
            },
            tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type:'none'
                }
            },
            legend: {
                data:json.name,
                x:"80",
                y:"26"
            },
            xAxis: {
                type : json.axiss[1],
                data: json.labels
                
            },
            yAxis: {
                type :json.axiss[0],
                data: json.labels
               
            },
            series: [{
                name: json.name[0],
                stack: json.stack,
                type: json.type,
                data: json.data,
                barMaxWidth:json.barMaxWidth
            },
            {
                name: json.name[1],
                stack: json.stack,
                type: json.type,
                data: json.data,
                barMaxWidth:json.barMaxWidth
            },
            {
                name: json.name[2],
                stack: "人数",
                type: json.type,
                data: json.data,
                barMaxWidth:json.barMaxWidth
            }]
        };
        // 加载图表
        this.init(targetId,option);
    },
    line:function(targetId,json){
        // 指定图表的配置项和数据
        var option = {
            animation:false,
            title: {
                text: json.title,
                textStyle:{
                	fontSize:14
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:json.name,
                show:false,
                x:"80",
                y:"26"
            },
            xAxis: {
                type : json.axiss[0],
                axisLabel : {
                    show:true,
                    interval: 0,
                    rotate: 10
                },
                data: json.labels  
            },
            yAxis: {
                inverse:json.inverse,
                type :json.axiss[1],
                min:json.min,
                data: json.labels
               
            },
            series: [{
                name: json.name,
                type: json.type,
                data: json.data
            }]
        };
        // 加载图表
        this.init(targetId,option);
    },
    pie:function(targetId,json){
        var option = {
            animation:false,
            title: {
                text: json.title
            },
            tooltip: {
                trigger: json.trigger,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                data:json.name,
                x:"80",
                y:"top"
            },
            series : [ {
            name:'访问来源',
            type:json.type,
            radius : '55%',
            center: ['50%', '60%'],
            data:json.data
        }
    ]
        };
        // 加载图表
        this.init(targetId,option); 
    }
};
