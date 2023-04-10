import React from "react";

const Blogs = () => {
	return (
		<div className="container mx-auto w-3/4">
			<div className="my-10 grid lg:grid-cols-2  gap-8">
				<div className="mockup-window border bg-slate-300">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble bg-purple-600 my-6">
							When should you use context API?
						</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble">
							Due to react component based design we often have to
							share between different components. But generally
							react only works one way or data flows like water
							from top to bottom or parent component to its child
							components.
						</div>
						<div className="chat-bubble my-2">
							We often need to very deeply nested child components
							from its parent which recquire a lots of props
							passing scenario between child components, which
							refered as props drilling. Context API remove the
							complexity of this props drilling by storing the
							props in parent scope and give access to other
							different nested components.
						</div>
						<div className="chat-bubble ">
							So, when we need to pass data to different nested
							components should use <code>Context API. </code>
						</div>
					</div>
				</div>
				<div className="mockup-window border bg-teal-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble bg-red-500 my-6">
							What is a custom hook?
						</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble">
							We use different hooks by importing from react based
							on our neccessity. Example of two most used hooks
							could be useState hook and useEffect hook.
						</div>
						<div className="chat-bubble my-2">
							But we can make our custom hook also. Its nothing
							but usual javascript function and other hooks from
							react. But these custom hooks allow us to insert
							custom functionality for a component while defining
							the custom hook.
						</div>
					</div>
				</div>
				<div className="mockup-window border bg-orange-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble bg-cyan-600 my-6">What is useRef?</div>
					</div>
					<div className="chat chat-end mb-10">
						<div className="chat-bubble">
							useRef is one of the built in hooks in React which
							allows us to directly access and manipulate DOM
							elements in React components without triggering
							unnecessary re-renders. As example we access input fields of a form from out javascript file and manipulate the DOM using javascipt logic. But in react this built in hooks allows us to directly access and manipulate the DOM. As we can clear the input field to empty string after its value is submitted. 
						</div>
					</div>
				</div>
				<div className="mockup-window border bg-sky-200">
					<div className="chat chat-start mt-10">
						<div className="chat-bubble bg-orange-600 my-6">What is useMemo?</div>
					</div>
					<div className="chat chat-end mb-10">
            <div className="chat-bubble">
              useMemo is another built in hook of react which allow us to memorize the result of a function and cache it to optimize performance.
            </div>
            <div className="chat-bubble my-2">
              In example, if we want to store a calculated result of function for future use cases and we dont want to re render the whole components for this data changes, we use useMemo hook. We can also memorize complex calcultaion by chaching it using useMemo hook which boost up the performance of the website.
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
<h3>Blogs</h3>;
