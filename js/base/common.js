$(function(){
    /*返回顶部 只有距离顶部的距离大于400像素时才显示返回顶部*/
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>300){
			$(".back-top").show();
		}else{
			$(".back-top").hide();
		}
	});
	/*返回顶部*/
	$(".back-top .js-back-top").click(function(){
		$('html,body').animate({scrollTop: '0'}, 800);
	});
})