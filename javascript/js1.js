//参数设置
    var imgWidth = 880; //每个图片长度
    var speed = 15; //间隔
    var delay = 3000; //延迟
    var step = 20; //步长         (!!!条件:880%step==0)
    var area = document.getElementById("img1");
    var con1 = document.getElementById("con1");
    var con2 = document.getElementById("con2");
    var con0 = document.getElementById("con0");
    var time;
    con2.innerHTML = con1.innerHTML;
    con0.innerHTML = con1.innerHTML;
    area.scrollLeft = 2640;

setTimeout("startMoveUp()",delay);
//--------------------------------------------------------------右滚函数开始
function startMoveUp() {        //函数--执行滚动
    stop2 += 1;
    if (stop2===1) {
        time = setInterval("scrollUp()", speed);
    }
    if (stop2===2){
        setTimeout("startMoveUp()",delay);
    }
}
function scrollUp() {              //滚动一步
    area.scrollLeft += step;
    if (area.scrollLeft % imgWidth ===0){
        clearInterval(time);
        if (stop === 1) {
            stop = 0;
            stop2 =0;
            return;                 //防止执行多个startMoveUp
        }
        setTimeout("startMoveUp()",delay);
        stop2 =0;
    }
    if(area.scrollLeft >= imgWidth * 6){
        area.scrollLeft = imgWidth * 3;
    }
}
//---------------------------------------------------------------右滚函数结束
//---------------------------------------------------------------左滚函数开始
function startMoveDown() {
    stop2 += 1;
    if (stop2===1) {
        time = setInterval("scrollDown()", speed);
    }
}


function scrollDown() {              //滚动一步
    area.scrollLeft -= step;
    if (area.scrollLeft % imgWidth ===0){
        clearInterval(time);
        if (stop === 1) {
            stop = 0;
            stop2 =0;
            return;                 //防止执行多个startMoveUp
        }
        setTimeout("startMoveUp()",delay);
        stop2 =0;
    }
    if(area.scrollLeft <= 870){
        area.scrollLeft = imgWidth * 4;
    }
}

//-----------------------------------------------------------左滚函数结束


//按钮换图效果
var stop = 0;                                       //防止添加多个延时滚动startMoveUp()；
var stop2 = 0;                                      //防止执行多个滚动scrollUp()
$(document).ready(function(){
    $(".bg_btn_right").click(function () {
        if(stop2 ===0) {
            stop += 1;
            startMoveUp();
        }
    });
    $(".bg_btn_left").click(function () {
        if(stop2 ===0) {
            stop += 1;
            startMoveDown();
        }
    })

});
//按钮悬停效果
$(document).ready(function(){
    $(".bg_btn").hover(
        function(){
            $(this).css("background-color","rgba(0,0,0,0.7)");
            $(this).css("display","block");
        },
        function () {
            $(this).css("background-color","rgba(0,0,0,0.4)");
            $(this).css("display","none");
        }
    );
    $("#img1").find("a").hover(
        function(){
            $(".bg_btn").css("display","block");
        },
        function () {
            $(".bg_btn").css("display","none");
        }
    );
});




//底部下拉加载内容
var count = 0;
$(window).scroll(function() {
    if (count === 0 && win >= $(document).height() - $(window).height() -20){
        count++;
        setTimeout("count = 0",1000);
        addImg();
    }
    else {
    }
});
function addImg() {
    console.log(1);
    $(".tb2")
        .append($(".tb1").eq(0).clone(true))
        .find(".name[name!=sjcolor]").each(function(){
            var rgb = ('#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6));
            $(this).css("color", rgb);
            $(this).attr('name','sjcolor');
        });
}



//二级菜单
