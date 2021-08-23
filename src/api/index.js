const fetch = require("node-fetch");

async function handleLoadMovies({ query }) {
	const API_KEY = process.env.REACT_APP_API_KEY;
	let fetchURL =
		query === ""
			? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
			: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

	const res = await fetch(fetchURL);
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
		});
	});
	return tempDataSet;
}

export { handleLoadMovies };

// const fetchImages = async page => {
//   const response = await fetch(
//     `${url}?client_id=${accessKey}&per_page=8&page=${page}`,
//   );
//   const data = await response.json();
//   if (response.status >= 400) {
//     throw new Error(data.errors);
//   }
//   return data;
// };

// export { fetchImages };
