import React, { useEffect, useState } from "react";
import { getAppliedJobs } from "../utils/utils";
import Tag from "../components/Tag";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const AppliedJobs = () => {
	const appliedJobs = getAppliedJobs();
	const [filter, setFilter] = useState("All");
	const [applied, setApplied] = useState([]);

	useEffect(() => {
		let arr = [];
		fetch("jobs.json")
			.then((res) => res.json())
      .then((data) => {
        // getting jobs information using id set to local storage.
				for (const key in appliedJobs) {
					const jobb = data.jobs.find((j) => j.id === parseInt(key));
					arr.push(jobb);
        }
        
        //after pushed all the jobs in array, filtering the array for its job location filter outside pushing scope.
				let filteredJobs = arr.filter((pro) => {
					if (filter === "Remote") {
						return pro.remote_or_onsite === "Remote";
					} else if (filter === "Onsite") {
						return pro.remote_or_onsite === "Onsite";
					} else {
						return pro;
					}
        });
        // after filtering setting the result to applied jobs
				setApplied(filteredJobs);
      });
    // using filter as dependency
	}, [filter]);

	return (
		<div className="">
			<div className="bg-slate-200 py-24  text-center">
				<h3 className="text-5xl">Applied Jobs </h3>
			</div>
			<div className="flex justify-end gap-4 items-center my-8 container">
				<label htmlFor="job-filter">Filter by:</label>
				<select
					onClick={(e) => setFilter(e.target.value)}
					name="filter"
					id="job-filter">
					<option value="All">All</option>
					<option value="Remote">Remote</option>
					<option value="Onsite">Onsite</option>
				</select>
			</div>
			<div className="container mx-auto">
				{applied.length > 0 &&
					applied.map((job, index) => (
						<div
							key={job.id}
							className="border p-6 rounded-md  text-gray-600 flex justify-center gap-4 md:gap-10 my-4 lg:gap-12 items-center">
							<div className="bg-slate-300 py-16 px-4 rounded-md">
								<img
									className="w-40"
									src={job.company_logo}
									alt=""
								/>
							</div>
							<div className="space-y-3 mb-4">
								<h2 className="text-black font-medium">
									{job.job_title}
								</h2>
								<p>{job.company_name}</p>
								<div className="flex gap-6">
									<Tag text={job.fulltime_or_parttime} />
									<Tag text={job.remote_or_onsite} />
								</div>
								<div className="flex gap-6">
									<div className="flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
											/>
										</svg>
										<p>{job.location}</p>
									</div>
									<div className="flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-6 h-6">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										<p>{job.salary}</p>
									</div>
								</div>
							</div>

							<div className="ms-auto">
								<Link
									to={`/jobs/${job.id}`}
									state={{ from: job }}>
									<Button text="View Details" />
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default AppliedJobs;
