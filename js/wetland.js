function onYouTubePlayerReady(playerId) {
  document.getElementById(playerId).playVideo();
}

$(document).ready(function(){
  $( "#video_dialog" ).dialog({
  	autoOpen: false,
  	modal: true,
  	width: 675,
  	close: function() {
  	  $( "#video_dialog" ).html("<div id='vid1'></div>");
  	}
  });
  
  /* West 4th and Chancellor */
  $("#interviewVid1").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/Xthu1GwJ2jk?enablejsapi=1&playerapiid=player1&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player1" });
  });
  
  $("#interviewVid2").on("click", function(){
     $("#video_dialog").dialog("open");
     swfobject.embedSWF("http://www.youtube.com/v/4mClmL3oUVs?enablejsapi=1&playerapiid=player2&version=3",
                        "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player2" });
   });
   
  $("#interviewVid3").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/n6ZI5hlby64?enablejsapi=1&playerapiid=player3&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player3" });
  });
  
  /*Jerico*/
  $("#interviewVid4").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/GncNHeTfjrw?enablejsapi=1&playerapiid=player1&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player1" });
  });

  $("#interviewVid5").on("click", function(){
     $("#video_dialog").dialog("open");
     swfobject.embedSWF("http://www.youtube.com/v/XFtGdVOmucU?enablejsapi=1&playerapiid=player2&version=3",
                        "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player2" });
   });

 $("#interviewVid6").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/43ce0UK1uO4?enablejsapi=1&playerapiid=player3&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player3" });
  });
  
  /* camosun */
  $("#interviewVid7").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/8K1u3H6e1sg?enablejsapi=1&playerapiid=player1&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player1" });
  });

  $("#interviewVid8").on("click", function(){
     $("#video_dialog").dialog("open");
     swfobject.embedSWF("http://www.youtube.com/v/oFcjBcD0HuE?enablejsapi=1&playerapiid=player2&version=3",
                        "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player2" });
   });

   $("#interviewVid9").on("click", function(){
      $("#video_dialog").dialog("open");
      swfobject.embedSWF("http://www.youtube.com/v/43ce0UK1uO4?enablejsapi=1&playerapiid=player3&version=3",
                         "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player3" });
    });
        
	/* Lost Lagoon */
  $("#interviewVid10").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/rEXgKoGR5CQ?enablejsapi=1&playerapiid=player1&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player1" });
  });
  
  $("#interviewVid11").on("click", function(){
     $("#video_dialog").dialog("open");
     swfobject.embedSWF("http://www.youtube.com/v/Vpg-GEp430w?enablejsapi=1&playerapiid=player2&version=3",
                        "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player2" });
   });
   
  $("#interviewVid12").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/qd6tNbW8JSE?enablejsapi=1&playerapiid=player3&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player3" });
  });
  
  /*Trout Lake*/
  $("#interviewVid13").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/InYz51Kq0SI?enablejsapi=1&playerapiid=player1&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player1" });
  });

  $("#interviewVid14").on("click", function(){
     $("#video_dialog").dialog("open");
     swfobject.embedSWF("http://www.youtube.com/v/m9AdpuY1feo?enablejsapi=1&playerapiid=player2&version=3",
                        "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player2" });
   });

 $("#interviewVid15").on("click", function(){
    $("#video_dialog").dialog("open");
    swfobject.embedSWF("http://www.youtube.com/v/QPjy-DL9URQ?enablejsapi=1&playerapiid=player3&version=3",
                       "vid1", "640", "348", "8", null, null, { allowScriptAccess: "always" }, { id: "player3" });
  });
});

