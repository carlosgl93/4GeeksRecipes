import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import propTypes from "prop-types";

const PostDetails = props => {
	console.log(props);
	const id = props.match.params.id;

	return (
		<div className="container project-details">
			<Card>
				<Card.Body>
					<Card.Title>Post Title - {id}</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the post
					</Card.Text>
				</Card.Body>
				<div className="actionHistory">
					<div>Posted by userNameX</div>
					<div>Date posted</div>
				</div>
			</Card>
		</div>
	);
};

PostDetails.propTypes = {
	match: propTypes.object
};

export default PostDetails;
