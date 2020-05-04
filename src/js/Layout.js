import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/layout/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import injectContext from "./store/appContext";
import Dashboard from "./component/dashboard/Dashboard";
import { MyNav } from "./component/layout/Navbar";
import { Footer } from "./component/layout/footer";
import PostDetails from "./component/posts/PostDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreatePost from "./component/posts/CreatePost";
import appContext from "./store/appContext";
import { Context } from "./store/appContext";
import { getState } from "./store/flux";

export const Layout = () => {
	const basename = process.env.BASENAME || "";

	// eslint-disable-next-line no-console
	console.log(Context);
	const { actions } = useContext(Context);

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log("COMPONENT DID MOUNT");
		actions.loadRandomRecipe();
	}, []);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNav />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/post/:id" component={PostDetails} />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/create" component={CreatePost} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
