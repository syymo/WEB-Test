window.onload=function(){
  var clientWidth=document.documentElement.clientWidth;
	$(".d1:eq(1)").css("width",clientWidth-width+"px");
}
var width=650;
$(function(){
  //浏览器宽度
  var clientWidth=document.documentElement.clientWidth;
  //alert（clientWidth）；
  //左边div宽度设置
  $(".d1:eq(0)").css("width",width+"px");
});
//浏览器自适应宽度
window.onresize=function(){
  var clientWidth=document.documentElement.clientWidth;
  //右边div宽度设置
  $(".d1:eq(1)").css("width",clientWidth-width+"px");
}
