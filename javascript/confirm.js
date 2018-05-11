// JavaScript Document
    function show_confirm()
{
var r=confirm("您是否确定购买此产品!");
if (r==true)
  {
  alert("您已成功下单，点击确定即将为您跳转到付款页面！");
  window.location .href='page.html'
  }
else
  {
  alert("您已取消本次购买！");
  }
}
