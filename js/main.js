/*@author PHLIP JOHN CERBAS*/

$(".slider").append(`<div class="pager"><ul></ul></div>`);

$(".slide").each(function(index){
	var i = index + 1;
	var img = $(this).data('img');
	$(this).css("backgroundImage", "url("+img+")");
	$('.pager > ul').append('<li><div class="pager-item" data-index="'+i+'"></div></li>');
});

$(".slide:nth-child(1)").css('display','block');

//set first page as initial active state
$('.pager > ul > li:nth-child(1) > .pager-item').addClass('active');

$('.pager > ul > li > .pager-item').click(function(){
	var i = $(this).data('index');
	$('.pager-item').removeClass('active');
	$(".slide").css('display','none');
	$(".slide:nth-child("+i+")").css('display','block');
	$(".slide:nth-child("+i+")").addClass('animated fadeIn');
	$(this).addClass('active');
	pageCounter = i;
})

//move to next slide on slide click
$(".slide").click(function(){
	// pageCounter++;
	slide();
	clearInterval(interval);
})

var pageCounter = 0;
var interval  = setInterval(function(){ slide(); },10000);

function slide(){
	if(pageCounter < $('.slide').length){
		pageCounter++
	}else{
		pageCounter = 1;
	}

	$(".slide").css('display','none');
	$(".slide:nth-child("+pageCounter+")").css('display','block');
	$(".slide:nth-child("+pageCounter+")").addClass('animated fadeIn');

	$('.pager-item').removeClass('active');
	$(".pager > ul > li:nth-child("+pageCounter+") > .pager-item").addClass('active');
}
