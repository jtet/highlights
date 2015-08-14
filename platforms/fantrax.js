function fantrax(){

// Grab list of players
var batterActiveList = [].slice.call( document.getElementsByClassName("statsContainer2")[0].getElementsByClassName("ACTIVE name") );
var batterReserveList = [].slice.call( document.getElementsByClassName("statsContainer2")[0].getElementsByClassName("RESERVE name") );
var pitcherActiveList = [].slice.call( document.getElementsByClassName("statsContainer2")[1].getElementsByClassName("ACTIVE name") );
var pitcherReserveList = [].slice.call( document.getElementsByClassName("statsContainer2")[1].getElementsByClassName("RESERVE name") );
var batterTDList = batterActiveList.concat(batterReserveList);
var pitcherTDList = pitcherActiveList.concat(pitcherReserveList);

var greenStars = document.getElementsByClassName("pr2");
while ( greenStars[0] ){
	greenStars[0].parentNode.setAttribute("style", "background-Color: #66FF66");
	greenStars[0].parentNode.removeChild(greenStars[0]);
};

var batterLFList = new Array(); // Last, First (batters)
for( i=0 ; i<batterTDList.length ; i++ ) batterLFList[i] = batterTDList[i].getElementsByTagName("a")[0].innerHTML;
var batterList = new Array(); // First Last (batters)
for( i=0 ; i<batterLFList.length ; i++ ) batterList[i] = escape( batterLFList[i].split(", ").reverse().join(" ") );
var pitcherLFList = new Array(); // Last, First (pitchers)
for( i=0 ; i<pitcherTDList.length ; i++ ) pitcherLFList[i] = pitcherTDList[i].getElementsByTagName("a")[0].innerHTML;
var pitcherList = new Array(); // First Last (pitchers)
for( i=0 ; i<pitcherLFList.length ; i++ ) pitcherList[i] = escape( pitcherLFList[i].split(", ").reverse().join(" ") );

// Add video buttons (batters)
for( i=0 ; i<batterList.length ; i++ ){
	batterTDList[i].getElementsByTagName("span")[0].getElementsByTagName("span")[2].insertAdjacentHTML("beforeBegin", " <img id='"+batterList[i]+"' src='"+chrome.extension.getURL("videoIcon.png")+"'> ");
	document.getElementById(batterList[i]).addEventListener("click", function(){
		chrome.runtime.sendMessage({greeting: "videoPopup", playerName: this.id}, function(response) { // to background
			console.log(response.farewell);
		});
	});
};
// Add video buttons (pitchers)
for( i=0 ; i<pitcherList.length ; i++ ){
	pitcherTDList[i].getElementsByTagName("span")[0].innerHTML += " <img id='"+pitcherList[i]+"' src='"+chrome.extension.getURL("videoIcon.png")+"'>";
	document.getElementById(pitcherList[i]).addEventListener("click", function(){
		chrome.runtime.sendMessage({greeting: "videoPopup", playerName: this.id}, function(response) { // to background
			console.log(response.farewell);
		});
	});
};

}
