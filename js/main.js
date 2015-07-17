var width = $(window).width();
$(document).ready(function() { 	

   $('#icon_tabs .item').tab();
   $('.ui.dropdown').dropdown();

   $('.conversation .item')
	  .on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('slide down')
	    ;
	  })
	;
	$('.message .close')
	  .on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('fade')
	    ;
	  })
	;

	$('.compose_content .ui.dropdown')
	  .dropdown({
	    allowAdditions: true
	    // apiSettings: {
	    //   url: '//api.semantic-ui.com/tags/{query}'
	    // }
	  })
	;

$('.toggle_column3').click(function() {

  var clicks = $(this).data('clicks');
  if (clicks) {
	$(".conversation_section").css({"width": "75%"});
	$(".column3").css({"display": "none"});
  } else {
  	$(".conversation_section").css({"width": "50%"});
  	$(".column3").css({"display": "inline-block"});
  }
  $(this).data("clicks", !clicks);
});


$('.setting_popup i')
 .popup({
    popup : $('.setting_popup_content'),
    on    : 'click',
    position : 'bottom right'
  })
;

$('.ui.comments .from_them .content .author')
 .popup({
    on    : 'hover',
    position : 'top left',
    exclusive: true,
    //inline:  true
  })
;


   
	$(window).resize(function(){
	   console.log('resize called');
	   if(width <= 768){
	       $('#sidebar')
	       	.removeClass('visible')
	       	.removeClass('labeled icon'); 

	       $('#sidebar')
			  .sidebar('attach events', '.sidebar_toggle' )
			  .sidebar('attach events', '#icon_tabs .item', 'hide' )
			;
			

			$('.column2')//opens sidebar conversation on all items in .tab_content
			  .sidebar('attach events', '.tab_content .item' )
			  .sidebar('attach events', '.hide_conversation', 'hide' )
			  .addClass('ui right wide sidebar segment')
			;
			

	   }
	   else{
	       $('#sidebar').addClass('visible')
	       $('.column2')//opens sidebar conversation on all items in .tab_content
			  .removeClass('ui right wide sidebar segment')
			;
	   }

	})
	.resize();//trigger the resize event on page load.


});