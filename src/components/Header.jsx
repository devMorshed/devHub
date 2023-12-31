import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
		<div className=" py-2  sticky top-0 bg-slate-200 z-50 ">
			<div className="container mx-auto flex justify-around items-center">
				<div className="brand">
					<Link
						to="/"
						className="font-mono text-3xl font-semibold text-orange-600">
						devHub
					</Link>
				</div>
				<div className="flex gap-2 md:gap-4 lg:gap-8">
					<NavLink className="hover:text-orange-600" to="/statistics">
						Statistics
					</NavLink>
					<NavLink className="hover:text-orange-600" to="/applied">
						Applied Jobs
					</NavLink>
					<NavLink className="hover:text-orange-600" to="/blogs">
						Blogs
					</NavLink>
				</div>
				<Link to="/">
					<Button text="Start Applying" />
				</Link>
			</div>
		</div>
  );
};

export default Header;