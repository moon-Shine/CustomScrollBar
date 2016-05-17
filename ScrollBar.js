/*
    objrange:滚动条滚动的范围
    objson:滚动条
    objall:功能整体（滚动条+内容）
    objcon:内容部分
 */
function JSscroll(obj){
    var objrange=document.getElementById(obj.objrange),
        objson=document.getElementById(obj.objson),
        objall=document.getElementById(obj.objall),
        objcon=document.getElementById(obj.objcon);
     
    objson.onmousedown=function(e){
        var ev=e || window.event;
        var disY=ev.clientY-objson.offsetTop;//鼠标距离盒子边框的距离
        objson.style.background="#333";

        //alert(disY)
        document.onmousemove=function(e){
            var e=e || window.event;
            dis=e.clientY-disY;//要移动的距离

            maxDis=objrange.offsetHeight-objson.offsetHeight;
            //console.log(maxDis)
            //console.log(scale)
            if(dis<0) dis=0;
            if(dis>maxDis) dis=maxDis;

            var scale=dis/maxDis;
            objson.style.top=dis+"px";
            objcon.style.top=scale*(objall.offsetHeight-objcon.offsetHeight)+"px";
        }
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
            objson.style.background="#5f5e5e";
        }
    }
}