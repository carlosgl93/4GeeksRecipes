import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SignUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
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
					<h5>Sign Up</h5>
					<Form.Group controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control placeholder="Enter email" onChange={this.handleChange} />
						<Form.Text className="text-muted">We ll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control placeholder="Password" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="firstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control placeholder="Jhon" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="lastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control placeholder="Doe" onChange={this.handleChange} />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Sign Up
					</Button>
				</Form>
			</div>
		);
	}
}

export default SignUp;
