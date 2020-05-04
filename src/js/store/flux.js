import { getAllFromAPI } from "../../API/request";

const getState = ({ getStore, getActions, setStore }) => {
	return {
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
};

export default getState;
