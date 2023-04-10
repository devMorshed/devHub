import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: [
		"Assignment 1",
		"Assignment 2",
		"Assignment 3",
		"Assignment 4",
		"Assignment 5",
		"Assignment 6",
		"Assignment 7",
		"Assignment 8",
	],
	datasets: [
		{
			label: "Marks",
			data: [60, 60, 60, 60, 60, 60, 60, 60],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

const Statistics = () => {
	return (
    <div className="container mx-auto my-10 flex items-center justify-center flex-col lg:flex-row gap-10 text-center">
      <div className="basis-1/2 ">
        <h3 className="text-5xl leading-relaxed">Statistical Representation of Assignment's Marks</h3>
      </div>
			<div className="w-2/3 max-w-2xl">
				<Doughnut data={data} />
			</div>
		</div>
	);
};

export default Statistics;
