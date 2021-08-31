import React from "react";
import { connect } from "react-redux";
import { loadUpcoming } from "../../../redux/Shopping/shopping-actions";

const UpcomingFilter = ({ loadUpcoming }) => {
	return (
		<div className="Upcoming">
			<button className="FilterBtn" onClick={loadUpcoming}>
				Upcoming Movies
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		loadUpcoming: () => dispatch(loadUpcoming()),
	};
};

export default connect(null, mapDispatchToProps)(UpcomingFilter);
