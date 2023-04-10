import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	// const [categories, setCategories] = useState([])

	// useEffect(() => {
	//   fetch("category.json")
	// 	.then((res) => res.json())
	// 	.then((data) => setCategories(data));
	// }, [])
	const categories = useLoaderData();

	console.log(categories);

	return (
		<div className=" ">
			<div className="bg-slate-200 -mt-24">
				<div className="flex container mx-auto flex-col md:flex-row items-end lg:items-center pt-32">
					<div className="space-y-4 basis-1/2 mb-10">
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

			<section>
				<SectionHeading
					text="Explore thousands of job opportunities with all the information you need. Its your future"
					head="Job Category List"
				/>
				<div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 my-10">
					{categories.jobs.map((category, index) => (
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
		</div>
	);
};

export default Home;
