window.addEventListener("load",function(){
	const apiKey="396832c";

	const movieForm=document.getElementById("movieForm");
	movieForm.addEventListener("submit",function(e){
		e.preventDefault();
		const movie=document.getElementById("movie").value;

		let url=`http://www.omdbapi.com/?i=tt3896198&apikey=396832c`

		if(movie){
			url= url+ `&t=${movie}`;
			fetch(url)
				.then(function(response){
					return response.json();
				}).then(function(data){
					fetchMovie(data);
				})
		}else{
			fetch(url)
				.then(function(response){
					return response.json();
				}).then(function(data){
					fetchMovie(data);
				})
		}

		function fetchMovie(data){
			if(data.Error == "Movie not found!"){
				alert(data.Error);
				return false;
			}
			let results= document.getElementById("results");
			console.log(data);
			results.innerHTML=`
				<img style="float:left" class="img-thumbnail" width="200" height="200" src="${data.Poster}">
				<h2>${data.Title}</h2>
				<h2>${data.Released}</h2>
				<h2>${data.Runtime}</h2>
				<h2>${data.Genre}</h2>
				<h2>${data.Director}</h2>
				<h2>${data.Actors}</h2>
			`
		}

		// fetch(url)
		// 	.then(function(response){
		// 		return response.json();
		// 	}).then(function(data){
		// 		console.log(data);
		// 	})
	})
})