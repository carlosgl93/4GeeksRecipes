import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/layout/scrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import injectContext from "./store/appContext";
import { Dashboard } from "./component/dashboard/Dashboard";
import { MyNav } from "./component/layout/Navbar";
import { Footer } from "./component/layout/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<MyNav />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
