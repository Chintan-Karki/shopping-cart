const API_KEY = process.env.REACT_APP_API_KEY;

export const getUrlFromObject = (object) => {
	return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&include_adult=${object.adult}&include_video=${object.include_video}&page=${object.page}&primary_release_date.gte=${object.primary_release_date_gte}&primary_release_date.lte=${object.primary_release_date_lte}`;
};

