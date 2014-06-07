$(function(){
	
	//food related display
	$(".food-related-nav li").each(function(index){
		$(this).click(function(){
			$(this).addClass("active")
						 .siblings("li").removeClass("active");

			var $selectSection = $(".food-related").find("section").eq(index);
			$selectSection.css("display", "block")
									.siblings().css("display", "none");
		})
	});

});