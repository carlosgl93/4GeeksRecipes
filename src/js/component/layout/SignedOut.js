import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Image } from "react-bootstrap";

const SignedOutLinks = () => {
	return (
		<Nav className="mr-auto">
			<Nav.Link as={Link} to="/signup" href="#features">
				Sign Up
			</Nav.Link>

			<Nav.Link as={Link} to="/signin">
				Login
			</Nav.Link>
		</Nav>
	);
};

export default SignedOutLinks;
