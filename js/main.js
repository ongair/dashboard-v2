var myElement = document.querySelector(".conversation_section")
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
			  .sidebar('attach events', '.sidebar_toggle', 'push page' )
			;
			$('.sidebar_toggle')
			  .removeClass('disabled')
			;
	   }
	   else{
	       $('#icon_tabs').addClass('visible');
	   }

	})
	.resize();//trigger the resize event on page load.


});