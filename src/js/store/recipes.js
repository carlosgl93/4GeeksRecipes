import { getAllFromAPI, getRecetaBuscada } from "../../API/request";

export default {
	store: {},
	actions: {
		loadRandomRecipe: () => {
			getAllFromAPI()
				.then(resp => resp.json())
				.then(data => {
					// eslint-disable-next-line no-console
					console.log("api info ", data);
				});
		}

		// Use getActions to call a function within a fuction
	}
};
