
$(document).ready(function(){
	$("#markup").animate({
		left : '100%',
		width : '50px;'
	},300,function(){
		$("#markup").animate({
			left : '10px'
		},300);
	});
});

$(".opMenu").hover(function(){

	let rect = this.getBoundingClientRect();
	$("#markup").stop();

	let ancho= this.clientWidth+10;
	let ubicacion = rect.left-5;
	$("#iconNav").animate({
		left: '-100%'
	},50,function(){
		$("#markup").animate({
			left: ubicacion + 'px',
			
		},100, function(){
			$("#markup").animate({width: ancho + 'px'},70);
		});
	});
	

},function(){
	/*console.log("ha salido del elemento " + $(this).text())
	$("#markup").animate({
		left: '-100px',
		width:'50px'
	},100);*/
});
$(".navegacionMain").hover(function(){
	$("#markup").stop();
	$("#iconNav").stop();
}, function(){
	$("#markup").stop();
	$("#iconNav").stop();
	$("#markup").animate({
		left: '10px',
		width:'50px'
	},300,function(){
		$("#iconNav").animate({
			left: '15%'
		},200)
	});
})