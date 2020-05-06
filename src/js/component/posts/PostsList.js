import React, { useContext } from "react";
import PostSummary from "./PostSummary";
import { Context } from "../../store/appContext";

const PostsList = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="posts-list section">
			<PostSummary />
			<PostSummary />
			<PostSummary />
			<PostSummary />
		</div>
	);
};

export default PostsList;
