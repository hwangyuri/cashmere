$(document).ready(function(){
    //문서가 준비가 완료되면 함수문의 내부 실행문을 실행해라
    $(".menu li:nth-child(1)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(1)").offset().top}, 1000);
        return false;
    });

    $(".menu li:nth-child(2)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_01 article:nth-child(2)").offset().top}, 1000);
        return false;
    });

    $(".menu li:nth-child(3)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_02 article:nth-child(1)").offset().top}, 1000);
        return false;
    });

    $(".menu li:nth-child(4)").click(function(){
        $("html, body").animate({scrollTop:$("#cont_02 article:nth-child(2)").offset().top}, 1000);
        return false;
    });

})