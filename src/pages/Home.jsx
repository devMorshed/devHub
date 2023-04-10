import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
		<div className=" bg-slate-200 -mt-24 ">
			<div className="flex container mx-auto flex-col md:flex-row items-end lg:items-center pt-32">
				<div className="space-y-4 basis-1/2">
					<h2 className="text-7xl">
						One Step Closer To Your{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r font-medium  from-indigo-400 to-violet-500">
							Dream Job
						</span>
					</h2>
					<p>
						Explore thousands of job opportunities with all the
						information you need. Its your future. Come find it.
						Manage all your job application from start to finish.
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
  );
};

export default Home;