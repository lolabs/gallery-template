
var App = {};

App.init = function(){
	document.onreadystatechange(function() {
		  if (document.readyState === 'complete') {
		    // document ready
			  console.log("ha");
		  }
	});
	var toggleButton = document.getElementsByClassName("menuToggle");
	console.log(toggleButton);
	toggleButton.onclick(function(e){
		console.log("heeeyy");
	});
};

App.init();