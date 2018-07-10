$(function(){
	$("body").append("<div class='ReturnTop back-top'><a href='javascript:void(0)' target='_blank'></a><a target='_blank' class='js-back-top' href='javascript:void(0)'></a></div>")
    /*返回顶部 只有距离顶部的距离大于400像素时才显示返回顶部*/
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>300){
			$(".back-top").fadeIn();
		}else{
			$(".back-top").fadeOut();
		}
	});
	/*返回顶部*/
	$(".back-top .js-back-top").click(function(){
		$('html,body').animate({scrollTop: '0'}, 800);
	});
})