const API_KEY = process.env.REACT_APP_API_KEY;

export const getLinkFromObject = (obj) => {
	var str = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&&`;
	for (var itemName in obj) {
		str += itemName + "=" + obj[itemName] + "&";
	}
	return str.slice(0, str.length - 1);
};