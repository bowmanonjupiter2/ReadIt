(function(){
	'use strict';
	let msg = "";
	let vMsg = null;
	
	window.addEventListener("mouseup", function(event){
		console.log("mouse up");
		if('speechSynthesis' in window){
			if('getSelection' in window){
				msg = getSelection().toString();
			}else if(document.selection && document.selection.type!="Control"){
				msg = document.selection.createRange().text;
			}
			
			if(msg){
				console.log(msg);
				vMsg = new SpeechSynthesisUtterance(msg);
				speechSynthesis.speak(vMsg);
				vMsg = null;
			}
		}else{
			console.error("text to speech not supported in your browser");
		}
	});
	
	window.addEventListener("mousedown", function(event){
		console.log("mouse down");
		msg = "";
	});
})()