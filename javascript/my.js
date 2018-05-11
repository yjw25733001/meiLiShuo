var sum;
$("[name^=j]").mousemove(function (){
    sum = $("[name^=j]").index(this);
    $(this).addClass("sel").siblings().removeClass("sel");
    $("[name^=i]").hide();
    $("[name*=i]").eq(sum).show();
});