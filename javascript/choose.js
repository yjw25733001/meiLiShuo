// JavaScript Document

$(function(){
 $(".tab_menu ul li").click(function(){
 $(this).addClass("on").siblings().removeClass("on"); 
 var index=$(this).index(); 
 $(".search_box > div").eq(index).show().siblings().hide(); 
 });
});
