//对echart的调用
 //柱状图的json
    var json1= {
        type:"line",
        stack:"人数",
        name:["张三"],
        title:"成绩走势图",
        inverse:true,
        min:1,
        axiss:["category","value"],
        labels:["市直属","游仙区1","游仙区2","游仙区3","游仙区4","游仙区5"],
        data:[5, 80, 10, 10, 10, 20]
    };
    $(function(){
        navHeight();
        changepic("canvas",json1);  
    });
