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

// Return Data example
/**
adult: false
backdrop_path: "/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg"
genre_ids: (3) [28, 12, 14]
id: 521720
original_language: "en"
original_title: "Avengers Grimm: Time Wars"
overview: "When Rumpelstiltskin tries to take over Earth once and for all, The Avengers Grimm must track him down through time in order to defeat him."
popularity: 13.263
poster_path: "/xfAcu74DRQXeM9XqFcE5MrSRzYP.jpg"
release_date: "2018-05-01"
title: "Avengers Grimm: Time Wars"
video: false
vote_average: 5
vote_count: 42


*/
