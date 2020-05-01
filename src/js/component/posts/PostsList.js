import React from "react";
import { Card, Img, Button } from "react-bootstrap";

const PostsList = () => {
	return (
		<div className="posts-list section">
			<Card>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Post Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the post
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Post Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the post
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>

			<Card>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Post Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the post
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PostsList;
