const URL_API = "https://api.spoonacular.com/recipes/random";

export const getAllFromAPI = () => {
	return fetch(`${URL_API}`);
};
