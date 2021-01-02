import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Landing from "./Landing";
import Fitness from "./Fitness";
import Products from "./Products";
import NotFound from "./NotFound";

export default function Pages() {
	// const currentPath = useLocation();
	return (
		<Switch>
			<Route exact path='/'>
				<Redirect to='/home' />
			</Route>
			<Route path='/home' render={() => <Landing />} />
			<Route path='/fitness' render={() => <Fitness />} />
			<Route path='/products' render={() => <Products />} />
			<Route path='*' component={NotFound} />
		</Switch>
	);
}


// for signing in:
// https://docs.amplify.aws/lib/auth/social/q/platform/js#setup-frontend