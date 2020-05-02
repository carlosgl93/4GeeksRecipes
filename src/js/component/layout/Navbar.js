import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import SignedInLinks from "./SignedInLinks";
import SignedOut from "./SignedOut.js";

export const MyNav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/">
				4GeeksProject
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<SignedInLinks />
				<SignedOut />
			</Navbar.Collapse>
		</Navbar>
	);
};
