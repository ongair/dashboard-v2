$(document).ready(function() { 	
  $('.icon_tabs .item').tab();

  $('.profile_toggle').click(function(){
       $('.profile')
		  .transition('fade left')
		;
		// var myElement = document.querySelector(".conversation_section");
		// myElement.style.width = "70%";
    });
});