
// navigation background hiding functionality

function hideNav() {
    $("#navi-toggle").prop("checked", false);
}

// smooth scrolling

$(document).ready(function(){
	$("a[href^='#']").on("click",function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$("html, body").stop().animate({
			"scrollTop": $target.offset().top
		}, 900, "swing", function () {
			window.location.hash = target;
		});
	});
});

// Highlightn nav links when scrolling the page

$(document).ready(function(){

	$("div").mouseenter(function(){
		 var id = $(this).attr('id');
		 $('.main-nav__link').removeClass('active');
		 $("[href=#"+id+"]").addClass('active');
	});
 
 });

