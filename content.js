// Show page icon and check options
chrome.runtime.sendMessage({greeting: "showPageIcon"}, function(response) { // to background
	console.log(response.farewell);
});
chrome.storage.sync.get(null, function(result){
	if ( document.location.hostname == "baseball.fantasysports.yahoo.com" ) yahoo(result);
	else if ( document.location.hostname == "games.espn.com" )		espn(result);
	else if ( document.location.hostname == "www.fantrax.com" )		fantrax();
//	else if ( document.location.hostname == "www.fanduel.com" && document.getElementById("scoring-table-name").innerHTML.indexOf("MLB") > -1 ) fanduel();
	else if ( document.location.hostname == "www.fanduel.com" )		fanduel();
	else if ( document.location.hostname == "www.draftkings.com" )		draftkings();
});


if ( document.location.hostname == "m.mlb.com" && document.location.href.indexOf("highlights=true")>-1 ){
	var meta = document.getElementById("videoMetaView");
	meta.parentNode.removeChild(meta);
	var header = document.getElementById("site-header");
	header.parentNode.removeChild(header);
	var footer = document.getElementById("mlbfooter");
	footer.parentNode.removeChild(footer);
	var search = document.getElementsByClassName("srchTerm");
	search[0].parentNode.parentNode.removeChild(search[0].parentNode);
	var vidPlayerWrap = document.getElementById("videoPlayerWrap");
	vidPlayerWrap.setAttribute("style", "padding: 0px");
	// These require a delay
	setTimeout(function(){
		if ( document.getElementById("featuredPlaylist_1") ){
			var featured_1 = document.getElementById("featuredPlaylist_1");	featured_1.parentNode.removeChild(featured_1);
		};
		if ( document.getElementById("topicCarousel_0") ){
			var carousel_0 = document.getElementById("topicCarousel_0");	carousel_0.parentNode.removeChild(carousel_0);
		};
		if ( document.getElementById("topicCarousel_1") ){
			var carousel_1 = document.getElementById("topicCarousel_1");	carousel_1.parentNode.removeChild(carousel_1);
		};
		if ( document.getElementById("topicCarousel_2") ){
			var carousel_2 = document.getElementById("topicCarousel_2");	carousel_2.parentNode.removeChild(carousel_2);
		};
		if ( document.getElementById("topicCarousel_3") ){
			var carousel_3 = document.getElementById("topicCarousel_3");	carousel_3.parentNode.removeChild(carousel_3);
		};
		if ( document.getElementById("topicCarousel_4") ){
			var carousel_4 = document.getElementById("topicCarousel_4");	carousel_4.parentNode.removeChild(carousel_4);
		};
		if ( document.getElementById("topicCarousel_5") ){
			var carousel_5 = document.getElementById("topicCarousel_5");	carousel_5.parentNode.removeChild(carousel_5);
		};
		if ( document.getElementById("topicCarousel_6") ){
			var carousel_6 = document.getElementById("topicCarousel_6");	carousel_6.parentNode.removeChild(carousel_6);
		};
		if ( document.getElementById("topicCarousel_7") ){
			var carousel_7 = document.getElementById("topicCarousel_7");	carousel_7.parentNode.removeChild(carousel_7);
		};
		if ( document.getElementById("topicCarousel_8") ){
			var carousel_8 = document.getElementById("topicCarousel_8");	carousel_8.parentNode.removeChild(carousel_8);
		};
	}, 1500);
};
