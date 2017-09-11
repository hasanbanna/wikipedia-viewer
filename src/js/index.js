$(document).ready(function(){
	$(".random-article").on('click', function(){
	    window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');		
	});

	$("#submit-btn").on('click', function(e){
		var searchTerm = $("#search-term").val();
		displaySearchResults(searchTerm);
		$(".search-form").hide();
		e.preventDefault();
	});
	// get wikipedia api details
	function displaySearchResults(title){
		var linkToArticle = "https://en.wikipedia.org/?curid=";
	  $.ajax(
	  	{ url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+title,
	  	  headers: { 'Api-User-Agent': 'WikipediaViewer/1.0' },
	  	  dataType: 'jsonp',
		  success: function(res){
		  	var html = "";
		  	for(page in res.query.pages){
		  		html+= '<p id="article"><a href='+linkToArticle+res.query.pages[page].pageid+'>'+ res.query.pages[page].extract + "</a></p>";
		  	}
		  	$(".container").append(html);
		  },
	      error: function(res){

		  }
		});
	}

});