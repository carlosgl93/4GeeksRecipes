import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Image } from "react-bootstrap";

const SignedInLinks = () => {
	return (
		<Nav className="mr-auto">
			<Nav.Link as={Link} to="/" href="#features">
				Profile
			</Nav.Link>
			<Nav.Link href="#pricing">New Post</Nav.Link>

			<Nav.Link as={Link} to="/">
				Log Out
			</Nav.Link>
			<Nav.Link as={Link} to="/">
				<Image src="src\img/userprofile.png" roundedCircle />
			</Nav.Link>
		</Nav>
	);
};

export default SignedInLinks;
