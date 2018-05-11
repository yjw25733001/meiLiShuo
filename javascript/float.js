/**
 * Created by yjw on 2017-12-21.
 */

//悬浮顶部
setInterval("displayTop()",30);
function displayTop() {
    if($(window).scrollTop()>=200){
        $("#search2,#search2_btn,.yincang").css("display","inline");
        $("#top").css("box-shadow","2px 1px 5px #888888");
    }else {
        $("#search2,#search2_btn,.yincang").css("display","none");
        $("#top").css("box-shadow","none");
    }
}



//侧边导航
//color: #8d7afb;
displayRight();
function displayRight() {
    if($(window).scrollTop()>=420){
        $("#right").css({
            "position":"fixed",
            "top":"60px"
        });
    }else {
        $("#right").css({
            "position":"absolute",
            "top":"480px"
        });
    }
}
$(document).ready(function(){
    setInterval("displayRight()",30);
    $("a[name^=c]").click(function (){
        $("a[name^=c]").removeClass("on");
        $(this).addClass("on");
    });
    $('a[name=c1]').click(function(){$('html,body').animate({scrollTop: '201px'}, 500);});
    $('a[name=c2]').click(function(){$('html,body').animate({scrollTop: '751px'}, 500);});
    $('a[name=c3]').click(function(){$('html,body').animate({scrollTop: '2001px'}, 500);});
    $('a[name=c4]').click(function(){$('html,body').animate({scrollTop: '1px'}, 500);});
    $('a[name=c5]').click(function(){$('html,body').animate({scrollTop: $(document).height()}, 500);});
});

var win =$(window).scrollTop();
$(function(){
    $(window).scroll(function() {
        win = $(window).scrollTop();
        if (win>=2000){
            $("a[name^=c]").removeClass("on");
            $("a[name=c3]").addClass("on");
        }else if(win>=750) {
            $("a[name^=c]").removeClass("on");
            $("a[name=c2]").addClass("on");
        }else if(win>=200){
            $("a[name^=c]").removeClass("on");
            $("a[name=c1]").addClass("on");
        }
    })
});

