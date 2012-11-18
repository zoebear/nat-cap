var n = 0.0;
var scale_selector = '';
var x = 0;
var y = 0;
var radial = 0;

$(document).ready(function(){

function scaleMenu() {
  //console.log("scaleMenu: " + scale_selector + " n variable: " + n);
  n += 1.05 - (n / 5.0);
  $(scale_selector).radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 5.0) {
    n = 0.0;
  } else {
    setTimeout(scaleMenu, 10);
  }
}

$.each($(".radial_container"), function(i, sel){
  x = parseInt($(sel).attr("data-x"));
  y = parseInt($(sel).attr("data-y"));
  radial = parseInt($(sel).attr("data-radial"));
  //console.log("data-x: " + x + " data-y: " + y);
  
  $(sel).radmenu({
  	listClass: 'list', // the list class to look within for items
  	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
  	radius: (radial || 130), // radius in pixels
  	animSpeed:400, // animation speed in millis
  	initialScale: 0.1,
  	scaleAnimEasing: "swing", // the type of easing used when animating
  	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
  	centerX: (x || 75), // the center x axis offset
  	centerY: (y || -25), // the center y axis offset
  	angleOffset: 0 // in degrees
  });
});


$(".radial_container").mouseenter(function(e){
  $(this).radmenu("show");
  scale_selector = this;
  scaleMenu();
});

$(".radial_container").mouseleave(function(e){
  $(this).radmenu("hide");
});


});