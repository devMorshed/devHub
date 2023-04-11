import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { Link, useLoaderData } from "react-router-dom";
import Tag from "../components/Tag";

const Home = () => {
	const [jobs, setJobs] = useState([]);
	const [all, setAll] = useState("");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("jobs.json")
			.then((res) => res.json())
			.then((data) => {
				if (all) {
					setJobs(data.jobs);
				} else {
					setJobs(data.jobs.slice(0, 4));
				}
			});
	}, [all]);

	const handleShow = () => {
		setAll(true);
	};

	//using loader facing issue during dynamic link to home. so double useEffect
	useEffect(() => {
		fetch("category.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div className=" ">
			<div className="bg-slate-200 -mt-24">
				<div className="flex container mx-auto flex-col md:flex-row items-end lg:items-center pt-32">
					<div className="space-y-4 basis-1/2 mb-10 px-10">
						<h2 className="text-7xl">
							One Step Closer To Your{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r font-medium  from-indigo-400 to-violet-500">
								Dream Job
							</span>
						</h2>
						<p>
							Explore thousands of job opportunities with all the
							information you need. Its your future. Come find it.
							Manage all your job application from start to
							finish.
						</p>
						<Button text="Get Started" />
					</div>
					<div className="basis-1/2">
						<img
							src="https://i.ibb.co/m0tfSR2/P3-OLGJ1-copy-1.png"
							alt=""
						/>
					</div>
				</div>
			</div>

			<section className="my-20 py-10 bg-slate-50">
				<SectionHeading
					text="Explore thousands of job opportunities with all the information you need. Its your future"
					head="Job Category List"
				/>
				<div className="px-10 container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 my-10">
					{categories.jobs &&
						categories.jobs.map((category, index) => (
							<div
								key={index}
								className="space-y-2 bg-slate-200 p-4 rounded-xl">
								<img
									className="bg-slate-300 p-3 rounded-md"
									src={category.image}
									alt=""
								/>
								<p>{category.category}</p>
								<p>{category.jobs_available}+ Jobs Available</p>
							</div>
						))}
				</div>
			</section>
			<section>
				<SectionHeading
					head="Featured Jobs"
					text="Explore thousands of job opportunities with all the information you need. Its your future"
				/>
				<div className="px-10 container mx-auto grid md:grid-cols-2 gap-6 my-10">
					{jobs &&
						jobs.map((job) => (
							<div
								key={job.id}
								className="border p-6 rounded-md  text-gray-600 flex flex-col">
								<div className="space-y-3 mb-4">
									<img
										className="w-32"
										src={job.company_logo}
										alt=""
									/>
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

								<div
									
									className="mt-auto">
									<Link to={`/jobs/${job.id}`} state={{job: job}}>
										<Button text="View Details" />
									</Link>
								</div>
							</div>
						))}
				</div>
				<div className="my-10 w-32 mx-auto" onClick={() => handleShow()}>
					<Button text="See All Jobs" />
				</div>
			</section>
		</div>
	);
};

export default Home;
