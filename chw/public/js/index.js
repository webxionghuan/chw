var i=0;
var Timer;
$(function(){
    $(".picImg").eq(0).show().siblings().hide();   //默认第一张图片显示，其他的隐藏
    //自动轮播
    TimerBanner();

    //点击红圈

    $(".tabs li").hover(function(){  //鼠标移动上去
        clearInterval(Timer); //让计时器暂时停止   清除计时器
        i=$(this).index();   //获取该圈的索引
        showPic();           //调用显示图片的方法，显示该索引对应的图片
    },function(){  //鼠标离开
        TimerBanner();    //继续轮播   计时器开始
    });

    //点击左右按钮
    $(".btn1").click(function(){
        clearInterval(Timer);
        i--;   //往左
        if(i==-1){
            i=4;
        }
        showPic();
        TimerBanner();
    });
    $(".btn2").click(function(){
        clearInterval(Timer);
        i++;   //往右
        if(i==5){
            i=0;
        }
        showPic();
        TimerBanner();
    });
});
//轮播部分
function TimerBanner(){
    Timer = setInterval(function(){
        i++;
        if(i==5){
            i=0;
        }
        showPic()
    },5000);
}
//显示图片
function showPic(){
    $(".picImg").eq(i).show().siblings().hide();
    $(".tabs li").eq(i).addClass("bg").siblings().removeClass("bg");
}

/*热销商品*/
$(function(){
    $("div#product>div ul").eq(0).show().siblings().hide();
    $("div#product>ul").mouseover(function(e){
     var $li=$(e.target);
      if($li.is("li")){
        $li.addClass("active").siblings().removeClass("active");
        $li.children(0).addClass("color").parent().siblings().children().removeClass("color"); 
       //下5图
       var i=$li.index();
        $("div#product>div ul").eq(i).show().siblings().hide();
    }
    });
})

/**1F/健康饮品**/
$(function(){
     
    function tab(parent,content){
        var $parent=$(parent);
        var $content=$(content);
        $content.first().show().siblings().hide();
        $parent.mouseover(function(){
            $li=$(this);
            $li.addClass("active").siblings().removeClass("active");
            var i=$li.index();
            $content.eq(i).show().siblings().hide();
        })
    }
    tab("#product-1>div:first-child ul li","#product-1>div:last-child div ul"); //1楼
    // tab();//2楼
    // tab();//3楼
    // tab();//4楼
    // tab();//5楼
    // tab();//6楼
})

