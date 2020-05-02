import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class CreatePost extends Component {
	state = {
		title: "",
		content: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<h5>Create a new Post</h5>
					<Form.Group controlId="title">
						<Form.Label>Post Title</Form.Label>
						<Form.Control placeholder="Enter your post title" onChange={this.handleChange} />
					</Form.Group>

					<Form.Group controlId="content">
						<Form.Label>Post Content</Form.Label>

						<Form.Control placeholder="Your Content" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="checkbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Create Post
					</Button>
				</Form>
			</div>
		);
	}
}

export default CreatePost;
