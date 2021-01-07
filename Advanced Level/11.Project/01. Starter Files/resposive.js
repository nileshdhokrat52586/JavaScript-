var defaultURL = 'joshwerner85.com';//<--Change to your website URL

//show loading graphic
function showLoader(id){
	$('#' + id + 'img').fadeIn('slow');
} 

//hide loading graphic
function hideloader(id){
	$('#' + id +'img').fadeOut('slow');
	
}

function allLoader(){
	var results = [];
	$('iframe').each(function(){
		if(!$(this).data('loaded')){results.push(false)}
	});

	var result=(results.length > 0) ? false : true;
	return results;
};

function loadPage($frame, url){
	if(url.substr(0,7) !== 'http://' && url.substr(0,8) !== 'https://' && url.substr(0,7) !== 'file://'){
		url = 'http://'+url;
	}
	$('iframe').not($frame).each(function(){showLoader($(this).parant().attr('id'));})
	$('iframe').not($frame).data('loaded', false);
	$('iframe').not($frame).attr('src', url);
}

$('.frame').each(function(){showLoader($(this).attr('id'))});

//when document loads
$(document).ready(function(){
	loadPage('', vdefaultURL);

	//Query String
	var qsArray = window.location.href.split('?');
	var qs = qsArray[qsArray.length=1];

	if(qs != '' && qsArray.length > 1){
		$('#url input[type=text]').val(qs);
		loadPage('',qs);
	}

//set slidable div width
$('#frames #inner').css('width', function(){
	var width =0;
	$('.frame').each(function(){width += $(this).outerWidth() + 20});
});

//Add Event Handlers for options radio buttons
$('input[type=radio]').change(function(){
	$frames = $('#frames');
	$inputs = $('input[type=radio]:checked').val();

	if($inputs == '1'){
		$frames.addClass('widthOnly');
	}
	else{
		$frames.removeClass('widthOnly');
	}

});

//add Event Handlers for scrollbars checkbox
$('input[type=check]').change(function(){
	var scrollbarWidth=15;
	$frames = $('#frames');
	$inputs =  $('#scrollbar:checked');

	if($inputs.length == 0){
		scrollbarWidth = -15;
	}
	$frames.find('iframe').each(function(i,el){
		$(el).attr('width', parseInt($(el).attr('width')) + scrollbarWidth);
	});
});

	//when the url textbox is used
	$('from').sumbit(function(){
		loadPage('' , $('#url input[type=text]').val());
		return false;
	});

	//when frame loads
	$('iframe'.load(function(){

		var $this = $(this);
		var url = '';
		var error=false;

		try{
			url = $this.contents().get(0).location.href;
		} catch(e){
			error = true;
			if($('#url input [type=text]').val() != ''){
				url = $('$url input [type=text]').val();	
			}else{
				url = defaultURL;
			}
	}
	if(allLoaded()){
			if(error){
				alert('Browsers prevent navigation from inside iframe');
				loadPage('', defaultURL);
			}else{
				loadPage($this, url);
			}
	}

	//when frame loads, hide loader graphic
	else{
		error = false;
		hideloader($(this).parant().attr('id'));
		$(this).data('loaded',true);
	}
	}));
});