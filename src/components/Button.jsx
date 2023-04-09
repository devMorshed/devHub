import React from "react";

const Button = ({ text }) => {
	return (
		<button
			className="border p-4 text-white rounded bg-gradient-to-r font-medium hover:bg-gradient-to-l from-indigo-400 to-violet-500">
			{text}
		</button>
	);
};

export default Button;
