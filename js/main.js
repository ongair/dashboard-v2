var width = $(window).width();
$(document).ready(function() { 	

   $('#icon_tabs .item').tab();

$('.toggle_column3').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
	$(".conversation_section").css({"width": "75%"});
	$(".column3").css({"display": "none"});
  } else {
  	$(".conversation_section").css({"width": "40%"});
  	$(".column3").css({"display": "inline-block"});
  }
  $(this).data("clicks", !clicks);
});


   
	$(window).resize(function(){
	   console.log('resize called');
	   if(width <= 768){
	       $('#icon_tabs')
	       	.removeClass('visible')
	       	.removeClass('labeled icon'); 

	       $('#icon_tabs')
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
	       $('#icon_tabs').addClass('visible')
	       $('.column2')//opens sidebar conversation on all items in .tab_content
			  .removeClass('ui right wide sidebar segment')
			;
	   }

	})
	.resize();//trigger the resize event on page load.


});