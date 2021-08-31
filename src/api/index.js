const fetch = require("node-fetch");

const handleLoadMovies = async (urlMovies) => {
	const res = await fetch(urlMovies);
	const data = await res.json();
	if (res.status >= 400) {
		throw new Error(data.errors);
	}
	const moviesData = data.results;
	let tempDataSet = [];
	moviesData.forEach((item) => {
		tempDataSet.push({
			id: item.id,
			title: item.original_title,
			description: item.overview,
			image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
			price: 20,
			original_language: item.original_language,
			release_date: item.release_date,
			genres: [...item.genre_ids],
		});
	});
	return tempDataSet;
};

const handleLoadTvShows = async (urlTvShows) => {
	const res = await fetch(urlTvShows);
	const data = await res.json();
	if (res.status >= 400) {
		throw new Error(data.errors);
	}
	const tvShows = data.results;
	let tempDataSet = [];
	tvShows.forEach((item) => {
		tempDataSet.push({
			id: item.id,
			title: item.original_name,
			description: item.overview,
			image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
			price: 20,
			original_language: item.original_language,
			release_date: item.first_air_date,
		});
	});
	return tempDataSet;
};

export { handleLoadMovies, handleLoadTvShows };