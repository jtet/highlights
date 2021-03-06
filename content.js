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
		var featured_1 = document.getElementById("featuredPlaylist_1");
		if ( featured_1 ){
			featured_1.parentNode.removeChild(featured_1);
		};
		var carArray = document.getElementsByClassName("carousel topic");
		while ( carArray[0] ){
			carArray[0].parentNode.removeChild(carArray[0]);
		};
	}, 1000);
};
