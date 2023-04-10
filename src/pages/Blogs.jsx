import React from "react";

const Blogs = () => {
	return (
		<div className="container mx-auto w-3/4">
			<div className="my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="mockup-window border bg-slate-300">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble">
							When should you use context API?
						</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble"></div>
					</div>
				</div>
				<div className="mockup-window border bg-teal-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble">
							What is a custom hook?
						</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble"></div>
					</div>
				</div>
				<div className="mockup-window border bg-orange-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble">What is useRef?</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble"></div>
					</div>
				</div>
				<div className="mockup-window border bg-sky-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble">What is useMemo?</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
<h3>Blogs</h3>;
