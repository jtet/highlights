function fanduel(){

// Grab list of players
var playerDivList = [].slice.call( document.getElementsByClassName("name") );
var playerList = new Array();
for ( var i=0 ; i<playerDivList.length ; i++ ){
	playerList[i] = escape( playerDivList[i].innerHTML );
};
// Add video buttons
for ( var i=0 ; i<playerList.length ; i++ ){
	playerDivList[i].innerHTML += " <img class='videoIcon' id='"+playerList[i]+"' src='"+chrome.extension.getURL("videoIcon.png")+"'>";
	document.getElementsByClassName("videoIcon")[i].addEventListener("click", function(){
		chrome.runtime.sendMessage({greeting: "videoPopup", playerName: this.id}, function(response) { // to background
			console.log(response.farewell);
		});
	});
};	

}


function draftkings(){

// Grab player List
var playerAList = [].slice.call( document.getElementsByClassName("pop") );
var playerList = new Array();
for ( var i=0 ; i<playerAList.length ; i++ ){
	playerList[i] = escape( playerAList[i].innerHTML );
};
// Remove "facetime" buttons (lol licensed material)
var apple = document.getElementsByClassName("highlight-pop");
while ( apple[0] ){
	apple[0].parentNode.removeChild(apple[0]);
};
// Add video buttons
for ( var i=0 ; i<playerList.length ; i++ ){
	playerAList[i].parentNode.innerHTML += " <img class='videoIcon' id='"+playerList[i]+"' src='"+chrome.extension.getURL("videoIcon.png")+"'>";
	document.getElementsByClassName("videoIcon")[i].addEventListener("click", function(){
		chrome.runtime.sendMessage({greeting: "videoPopup", playerName: this.id}, function(response) { // to background
			console.log(response.farewell);
		});
	});
};

}
