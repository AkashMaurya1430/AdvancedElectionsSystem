import React from "react";

import "./EachCandidateVote.css";

const Votes = ({value}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${value}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="value">
			<div className="value-done" style={style}>
				{value}%
			</div>
		</div>
	)
}

export default Votes;