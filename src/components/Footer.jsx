import React from "react";

const Footer = () => {
	return (
		<div className="bg-gray-900 ">
			<div className="divide-y w-3/4 mx-auto">
				<div className="max-w-7xl mx-auto p-6 md:p-16 grid-cols-2 md:grid-cols-3 lg:gap-10 md:gap-6 gap-8  text-center lg:text-start grid lg:grid-cols-5 text-white">
					<div className="w-40 mx-auto lg:mx-0 space-y-4">
						<h3 className="text-3xl">devHub</h3>
						<p className="text-xs">
							There are many variations of passages of Lorem Ipsum
							, but the majority have suffered alteration in some
							form.
						</p>
						<ul className="">
							<li className="flex justify-center">
								<img
									className="w-24"
									src="/src/assets/Group 9969.png"
									alt=""
								/>
							</li>
						</ul>
					</div>
					<ul className="text-gray-400">
						<h4 className="text-white text-xl">Links</h4>
						<li>About Us</li>
						<li>Works </li>
						<li>Latest News Us</li>
						<li>Carrers </li>
					</ul>
					<ul className="text-gray-400">
						<h4 className="text-white text-xl">Products</h4>
						<li>Prototype </li>
						<li>Plans & Pricing </li>
						<li>Customer</li>
						<li>Integration </li>
					</ul>
					<ul className="text-gray-400">
						<h4 className="text-white text-xl">Support</h4>
						<li>Prototype </li>
						<li>Plans & Pricing </li>
						<li>Customer</li>
						<li>Integration </li>
					</ul>
					<ul className="text-gray-400">
						<h4 className="text-white text-xl">Contact</h4>
						<li>524 Broadway , NYC </li>
						<li>+1 777 - 978 - 5570 </li>
					</ul>
        </div>
        <div className="flex text-center justify-center lg:justify-between py-4 flex-col lg:flex-row">
          <p>@devHub 2023, all rights reserved</p>
          <p>created with 🖤 by devMorshed </p>
        </div>
			</div>
		</div>
	);
};

export default Footer;
