var width = $(window).width();
$(document).ready(function() { 	

   $('#icon_tabs .item').tab();


	$(window).resize(function(){
	   console.log('resize called');
	   if(width <= 768){
	       $('#icon_tabs')
	       	.removeClass('visible')
	       	.removeClass('labeled icon'); 

	       $('#icon_tabs')
			  .sidebar('attach events', '.sidebar_toggle' )
			;
			

			$('.conversation_section')//opens sidebar conversation on all items in .tab_content
			  .sidebar('attach events', '.tab_content .item' )
			  .sidebar('attach events', '.hide_conversation', 'hide' )
			  .addClass('ui right wide sidebar segment')
			;
			

	   }
	   else{
	       $('#icon_tabs').addClass('visible')
	       $('.conversation_section')//opens sidebar conversation on all items in .tab_content
			  .removeClass('ui right wide sidebar segment')
			;
	   }

	})
	.resize();//trigger the resize event on page load.


});