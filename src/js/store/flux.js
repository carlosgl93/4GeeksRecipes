import { getAllFromAPI, getRecetaBuscada } from "../../API/request";
import auth from "./Auth";
import recipes from "./recipes";
// import favrecipes from "./favrecipes";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		auth,
		recipes
		// favrecipes,
	};
	// return {
	// store: {},
	// actions: {

	// createRecipe: () => {

	// },

	// signInFunc: (store, action) => {

	// },

	// loadRecetaBuscada: () => {
	// 	getRecetaBuscada()
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			// eslint-disable-next-line no-console
	// 			console.log("api info ", data);
	// 		});
	// },
	// loadRandomRecipe: () => {
	// 	getAllFromAPI()
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			// eslint-disable-next-line no-console
	// 			console.log("api info ", data);
	// 		});
	// }

	// Use getActions to call a function within a fuction
	// 	}
	// };
};

export default getState;
