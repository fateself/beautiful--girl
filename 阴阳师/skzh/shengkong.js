/**
 * Created by Administrator on 2017/2/21.
 */
$(function(){
    $(".ban-left").animate({
        "left":"136px",
    },1500)
    $(".ban-right").animate({
        "right":"50px",
    },1500)
    $("#zhuanpan").animate({
        "opacity":1
    },1500)

    $(".shengkong").animate({
        "opacity":1
    },1500)

    $(".dianji").animate({
        "opacity":1
    },1500)
    $(".yun-left").animate({
        "left":"604px"
    },1500)
    $(".yun-right").animate({
        "right":"590px"
    },1500)
$("#shousuo").mouseenter(function(){
    $("#shousuo").stop().animate({
        "width":"130px"
    },500)
})
    $("#shousuo").mouseleave(function(){
    $("#shousuo").stop().animate({
        "width":"100px"
    },500)

})
    $("#evenhead>.nav").mouseenter(function(){
        $(this).addClass("navyan").siblings().removeClass("navyan")
    })
    $("#evenhead").mouseleave(function(){
        $(this).children().removeClass("navyan")
        $(this).children().eq(0).addClass("navyan")

    })

    $("#list>li").mouseenter(function(){
        $(this).children().addClass("myan")
        $(".list1").children().removeClass("myan")
    })
    $("#list>li").mouseleave(function(){
        $(this).children().removeClass("myan")
        $(".list1").children().addClass("myan")


    })
    $(".dianji-right").mouseenter(function(){
        $(".dianji-right").css("background-position-y","-71px")
    })

    $(".dianji-right").mouseleave(function() {
        $(".dianji-right").css("background-position-y", "0px")
    })

    $(".dianji-left").mouseenter(function(){
        $(".dianji-left").css("background-position-y","-71px")
    })

    $(".dianji-left").mouseleave(function() {
        $(".dianji-left").css("background-position-y", "0px")
    })

    $(".butto-but1").mouseenter(function(){
        $(this).css("background-position-y","-291px")
    })

    $(".butto-but1").mouseleave(function() {
        $(this).css("background-position-y", "-221px")
    })

    $(".butto-but").mouseenter(function(){
        $(this).css("background-position-y","-453px").css("background-position-x","-240px")
    })

    $(".butto-but").mouseleave(function() {
        $(this).css("background-position-y", "-389px").css("background-position-x","-240px")
    })

    $(".toupiao").mouseenter(function(){
        $(this).css("background-position-y","-292px").css("background-position-x","-464px")
    })

    $(".toupiao").mouseleave(function() {
        $(this).css("background-position-y", "-222px").css("background-position-x","-464px")
    })

    $(".btn1").click(function(){
        $(".works").css("display","block").siblings().removeClass("work")
    })

    $(".btn2").click(function(){
        $(".works").css("display","none").siblings().addClass("work")
    })

    $("#shousuo").focus(function () {
        if ($(this).attr("placeholder","搜索")) {

            $(this).attr("placeholder","");
        }
    });

    $("#shousuo").blur(function () {
        if ($(this).attr("placeholder","")) {

            $(this).attr("placeholder","搜索");
        }
    })

    $(".butto-text").focus(function () {
        if ($(this).attr("placeholder","快来参赛吧")) {

            $(this).attr("placeholder","");
        }
    });

    $(".butto-text").blur(function () {
        if ($(this).attr("placeholder","")) {

            $(this).attr("placeholder","快来参赛吧");
        }
    })

    $(".pagew-in-1-1-2").mouseenter(function(){
        $(this).children().eq(1).stop().animate({
                "height":"55px"
            })
    })

    $(".pagew-in-1-1-2").mouseleave(function(){
        $(this).children().eq(1).stop().animate({
            "height":"30px"
        })
    })

    $("#list2-tougao").mouseenter(function(){
        $(".list2-t").css("display","block")
    })

    $("#list2-tougao").mouseleave(function(){
        $(".list2-t").css("display","none")
    })
})

window.onload=function(){
    var zhuanpan = document.getElementById("zhuanpan");
    var degs = 0;
    setInterval(function(){
        degs+=1;
        zhuanpan.style.transform = "rotate("+degs+"deg)";

    },50)


}