import React from "react";
import Notifications from "./Notifications";
import PostsList from "../posts/PostsList";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
	return (
		<Container>
			<Row>
				<Col sm={12} md={6}>
					<PostsList />
				</Col>
				<Col sm={12} md={(6, { offset: 1 })}>
					<Notifications />
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
