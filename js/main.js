$(document).ready(function(){
	$('.tile div').hide();
	$('#hybrid').show();

	$('.tile a').click(function(e){
		e.preventDefault();
		//hide all strain tile divs
		var $this = $(this).parent().find('div');
		$('.tile div').not($this).hide();
		$this.toggle();
	});

	$('.see-more').click(function(){
		var $this = $(this);
		$this.toggleClass('see-more');
		if($this.hasClass('see-more')){
			$this.text('SEE MORE');
		} else {
			$this.text('SEE LESS').addClass('see-less');
		}
	});

	$('#my-reason').change(function(){
		var $this = $(this);
		var tweet = $this.val();
		$('#tweet-my-reason').attr("href", "https://twitter.com/intent/tweet?text=" + tweet + "&button_hashtag=whatsyourreason");
	});

	$(function(){
  		var hash = window.location.hash;
  		hash && $('nav.ul a[href="' + hash + '"]').tab('show');

  		$('#top-nav a').click(function (e) {
	    	$(this).tab('show');
	    	var scrollmem = $('body').scrollTop() || $('html').scrollTop();
	    	window.location.hash = this.hash;
    		$('html,body').scrollTop(scrollmem);
  		});
	});

	var hash = window.location.hash;
	$('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000);

});
