import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
		<div className="container mx-auto my-10">
			<img
				className="w-full rounded-xl"
				src="https://yoast.com/cdn-cgi/image/width=1012%2Cheight=531%2Cfit=cover%2Cf=auto%2Cquality=75%2Conerror=redirect/app/uploads/2015/08/404_error_checking_FI.png"
				alt=""
			/>
			<div className="my-8 w-3/4 mx-auto text-center  md:flex justify-center items-center gap-4">
        <div className='md:flex gap-2 items-center my-6'>
          <p className='my-4'>Hey Mate, Feeling</p>
					<kbd className="kbd">L</kbd>
					<kbd className="kbd">O</kbd>
					<kbd className="kbd">S</kbd>
					<kbd className="kbd">T</kbd>
					<kbd className="kbd">?</kbd>
				</div>
				<Link to="/">
					<Button text="Back To Home" />
				</Link>
			</div>
		</div>
  );
};

export default Errorpage;