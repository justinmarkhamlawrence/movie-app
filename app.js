
function getVideos(movieType){
	var link = "https://api.themoviedb.org/3/movie/"+movieType+"?api_key=0621fea9c06f69e2792e9f85596f52c8";
  var params = {
		type: 'movie',
	};
	$.getJSON(link,params, function (data) {
		console.log(data.results);
		showPoster(data.results);

	})
};


  function showPoster(movies){
    
    var thumbnail = "";
    var movieInfos = "";
    var url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

    console.log(movies.length);
    	for (var i = 0; i < movies.length; i++){

    		var moviePoster = movies[i].poster_path;
        var title = movies[i].title;
        var overview = movies[i].overview;
        var popularity = Math.floor(movies[i].popularity);
        var stars = movies[i].vote_average;
        thumbnail +="<div><img src="+ url + moviePoster + "><section id='infos'><h2>"+ title +"</h2>"
        						+"<p>"+ overview + "</p>" + "<ul>" + "<li>" + 'Popularity Rating: '+ popularity + "</li>"
        							+"<li>"+ 'Stars: '+ stars + "</li>" + "</ul></section></div>" ;
        
   };
 	
    $('#results').html(thumbnail);
		   
    $('#results').on('mouseenter','img', function(e) {
    	e.preventDefault();
    	$(this).siblings('#infos').show();
    })
     $('#results').on('mouseleave','img', function(e) {
    	e.preventDefault();
    	$(this).siblings('#infos').hide();
    })

  };



getVideos('popular');

$('#top-rated').click(function() {
	getVideos('top_rated');
});

$('#upcoming').click(function() {
	getVideos('upcoming');
});

$('#popular').click(function() {
	getVideos('popular');
});


