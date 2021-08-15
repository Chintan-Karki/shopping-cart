const getMovieList = async () => {
	const url = ``;
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
