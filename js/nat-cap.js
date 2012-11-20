var n = 0.0;
var x = 0;
var y = 0;
var radial = 0;
var scale_up;
var scale_down;
var toggle = false;

$(document).ready(function(){


function scaleMenuUp(sel) {
  n += 1.05 - (n / 5.0);
  $("#"+sel).radmenu("scale", n);
  if (n > 5.0) {
    //n = 0.0;
  } else {
    scale_up = setTimeout(function(){scaleMenuUp(sel)}, 10);
  }
}

function scaleMenuDown(sel) {
  n -= 1.5;
  $("#"+sel).radmenu("scale", n);
  if (n <= 0.0) {
    n = 0.0;
    $("#"+sel).radmenu("hide");
  } else {
    scale_down = setTimeout(function(){scaleMenuDown(sel)}, 10);
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
  	initialScale: 0.1,//0.1
  	scaleAnimEasing: "swing", // the type of easing used when animating
  	scaleAnimOpts: {}, // the animation options you desire to apply to scaling
  	centerX: (x || 35), // the center x axis offset
  	centerY: (y || -60), // the center y axis offset
  	angleOffset: 0 // in degrees
  });
  
  //$(sel).radmenu("show");
});


$(".radial_inner").on('mouseenter', function(e){
  if (toggle) { return; }
  toggle = true;
  clearTimeout(scale_down);
  clearTimeout(scale_up);
  n = 0;

  $(this).parent().find('.wetname').fadeIn('slow');
  $(this).parent().find('#ocadPosters').fadeIn('slow');
  $(".radial_container").radmenu("hide");

  $(this).parent().radmenu("show");
  $('a.lightbox').nyroModal(); // Select all links with lightbox class
  scaleMenuUp($(this).parent().attr("id"));
});

$(".radial_container").on('mouseleave', function(e){
  toggle = false;
  $(this).parent().find('.wetname').fadeOut('fast');
  $(this).parent().find('#ocadPosters').fadeOut('slow');
  clearTimeout(scale_up);
  clearTimeout(scale_down);
  scaleMenuDown($(this).attr("id"));
});






});

