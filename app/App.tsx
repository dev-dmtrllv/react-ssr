import React from "react";
import { Dynamic } from "ssr/async";
import { Router, Page, Route, Link } from "ssr/router";

export default () =>
{
	return (
		<Router>
			<Link to="/">Home</Link>
			<Link to="/1">Users 1</Link>
			<Link to="/2">Users 2</Link>
			<Route exact path="/">
				<h1>Home</h1>
			</Route>
			<Page exact path="/1" title="users 1" />
			<Page prefetch={false} exact path="/2" title="users 2" />
		</Router>
	)
};