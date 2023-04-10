$("#mInicio").click(function() {
	window.location.assign("index.html");

});
$("#mAbout").click(function() {
	window.location.assign("quienesSomos.html");

});
const posInicio = $("#mInicio").offset().top;
const posAbout = $("#mAbout").offset().left;
const posContac= $("#mContactanos").offset().top;
$(".iconMenu").hover(function(){
	$(".iconMenu").removeClass('pagActual');
	$("#mInicio").animate({
		top:'-70px'
	},100,function(){
		$("#mAbout").animate({
			left: '70px'
		},100,function(){
			$("#mContactanos").animate({
				top:'70px'
			},100);
		});
	});
},function(){
	$("#mInicio").stop();
	$("#mAbout").stop();
	$("#mContactanos").stop();

	$("#mInicio").animate({
		top:'0px'
	},50);
	$("#mAbout").animate({
		left:'0px'
	},50);
	$("#mContactanos").animate({
		top:'0px'
	},50);
	$(".iconMenu").addClass('pagActual');
});