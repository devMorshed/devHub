import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
		<div className="container my-4 mx-auto flex justify-around items-center">
			<div className="brand">
				<Link
					to="/"
					className="font-mono text-3xl font-semibold text-orange-600">
					devHub
				</Link>
			</div>
			<div className="flex gap-4">
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
			<Link to='/'>
				<Button text="Start Applying" />
			</Link>
		</div>
  );
};

export default Header;