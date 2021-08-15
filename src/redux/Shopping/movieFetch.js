const getMovieList = async () => {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=d90c8d9f8b3f091a3b2e7b14989915c6&query=Jack+Reacher`;
	try {
		fetch(url)
			.then((data) => data.json())
			.then((data) => {
				console.log(data.results);
			});
		// images at `https://image.tmdb.org/t/p/w185_and_h278_bestv2/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg`
	} catch (error) {
		console.log(error);
	}
};

getMovieList();
