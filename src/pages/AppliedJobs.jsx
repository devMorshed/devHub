import React, { useEffect, useState } from "react";
import { getAppliedJobs } from "../utils/utils";

const AppliedJobs = () => {
	const appliedJobs = getAppliedJobs();
	// console.log(appliedJobs);

	const [applied, setApplied] = useState([]);
	useEffect(() => {
		fetch("jobs.json")
			.then((res) => res.json())
      .then((data) => {
        
				let arr = [];
				for (const key in appliedJobs) {
					const jobb = data.jobs.find((j) => j.id === parseInt(key));
          arr.push(jobb)
				}
        setApplied(arr);
			});
	}, []);

	console.log(applied);
	return (
		<div className="my-10">
      <p className="text-4xl text-center ">Applied In { applied.length} jobs </p>
		</div>
	);
};

export default AppliedJobs;
