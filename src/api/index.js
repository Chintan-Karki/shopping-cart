const fetch = require("node-fetch");
const API_KEY = process.env.REACT_APP_API_KEY;

const handleLoadMovies = async (query) => {
	let fetchURL =
		query === ""
			? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

	const res = await fetch(fetchURL);
	const data = await res.json();
	if (res.status >= 400) {
		throw new Error(data.errors);
	}
	return data;
	// const moviesData = data.results;
	// console.log(moviesData);
	// let tempDataSet = [];
	// moviesData.forEach((item) => {
	// 	tempDataSet.push({
	// 		id: item.id,
	// 		title: item.original_title,
	// 		description: item.overview,
	// 		image: `https://image.tmdb.org/t/p/original${item.poster_path}`,
	// 		price: 20,
	// 	});
	// });
	// return tempDataSet;
};

export { handleLoadMovies };

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
