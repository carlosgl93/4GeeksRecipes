import { getAllFromAPI, getRecetaBuscada } from "../../API/request";
import firebase from "firebase";

export default {
	store: {},
	actions: {
		userLogin: () => {
			firebase.userLogin(email, password);
		}

		// Use getActions to call a function within a fuction
	}
};
