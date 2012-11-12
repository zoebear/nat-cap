var n = 0.0;

$(document).ready(function(){

function scaleMenu(selector) {
  n += 1.05 - (n / 10.0);
  $(selector).radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu(selector), 10);
  }
}
/*function scaleMenu() {
  n += 1.05 - (n / 10.0);
  $("#radial_container_w").radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu, 10);
  }
}
function scaleMenu() {
  n += 1.05 - (n / 10.0);
  $("#radial_container_j").radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu, 10);
  }
}
function scaleMenu() {
  n += 1.05 - (n / 10.0);
  $("#radial_container_l").radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu, 10);
  }
}
function scaleMenu() {
  n += 1.05 - (n / 10.0);
  $("#radial_container_c").radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu, 10);
  }
}
function scaleMenu() {
  n += 1.05 - (n / 10.0);
  $("#radial_container_t").radmenu("scale", n);
  //var scale = n / 10.0
  //$(".my_class a img").attr('width', 30*scale);
  //$(".my_class a img").attr('height', 30*scale);
  if (n > 10.0) {
    n = 0.0
  } else {
    setTimeout(scaleMenu, 10);
  }
}*/
/* Node content flyout */

$("#radial_container").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 130, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 75, // the center x axis offset
	centerY: -20, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container").mouseenter(function(e){
  $("#radial_container").radmenu("show");
  scaleMenu("#radial_container");
});

$("#radial_container").mouseleave(function(e){
  $("#radial_container").radmenu("hide");
});

/* west 4th node */

$("#radial_container_w").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 50, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 60, // the center x axis offset
	centerY: -50, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container_w").mouseenter(function(e){
  $("#radial_container_w").radmenu("show");
  scaleMenu("#radial_container_w");
});

$("#radial_container_w").mouseleave(function(e){
  $("#radial_container_w").radmenu("hide");
});

/* jerico node */

$("#radial_container_j").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 50, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 50, // the center x axis offset
	centerY: -45, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container_j").mouseenter(function(e){
  $("#radial_container_j").radmenu("show");
  scaleMenu("#radial_container_j");
});

$("#radial_container_j").mouseleave(function(e){
  $("#radial_container_j").radmenu("hide");
});

/* camosun node */

$("#radial_container_c").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 50, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 75, // the center x axis offset
	centerY: -20, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container_c").mouseenter(function(e){
  $("#radial_container_c").radmenu("show");
  scaleMenu("#radial_container_c");
});

$("#radial_container_c").mouseleave(function(e){
  $("#radial_container_c").radmenu("hide");
});

/* Lost lagoon node */

$("#radial_container_l").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 50, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 50, // the center x axis offset
	centerY: -55, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container_l").mouseenter(function(e){
  $("#radial_container_l").radmenu("show");
  scaleMenu("#radial_container_l");
});

$("#radial_container_l").mouseleave(function(e){
  $("#radial_container_l").radmenu("hide");
});

/* trout lake node */

$("#radial_container_t").radmenu({
	listClass: 'list', // the list class to look within for items
	itemClass: 'item', // the items - NOTE: the HTML inside the item is copied into the menu item
	radius: 50, // radius in pixels
	animSpeed:400, // animation speed in millis
	initialScale: 0.1,
	scaleAnimEasing: "swing", // the type of easing used when animating
	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
	centerX: 50, // the center x axis offset
	centerY: -55, // the center y axis offset
	angleOffset: 0 // in degrees
});

$("#radial_container_t").mouseenter(function(e){
  $("#radial_container_t").radmenu("show");
  scaleMenu("#radial_container_t");
});

$("#radial_container_t").mouseleave(function(e){
  $("#radial_container_t").radmenu("hide");
});

/* Pretty Photo int */



/*
  $("#nav-two a").each(function(i) {
    if (i != 0) { 
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");
*/

});