import React from "react";
import { Card, Button } from "react-bootstrap";

const PostSummary = props => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>Post Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the post
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};

export default PostSummary;
