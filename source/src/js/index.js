import "../scss/index.scss";
import "./reveal";
import "./number";
import "./waypoint";
import "./menu-mobile";
import "./scroll-to-top";
import "./dropdown-search";
import "./model-book";

// reload to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
var $ = require('jquery');


//   ẩn hiện table
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  if(acc[i]){
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
// show tabs
$(document).ready(function() {
	var $btns = $('.butn').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
    
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
});
