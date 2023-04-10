import { toast } from "react-hot-toast";

const addToDB = (id) => {
	let jobCart;
	//get previous data from localStorage;
	const appliedJobs = localStorage.getItem("applied-jobs");

	if (appliedJobs) {
		jobCart = JSON.parse(appliedJobs);
	} else {
		jobCart = {};
	}

	const status = jobCart[id];

	if (status) {
    toast("Already Exists in Applied Jobs");
	} else {
    jobCart[id] = true;
    toast('Added To Applied Jobs')
	}

	localStorage.setItem("applied-jobs", JSON.stringify(jobCart));
};

const getAppliedJobs = () => {
	let jobCart = {};
	const appliedJobs = localStorage.getItem("applied-jobs");
  appliedJobs && (jobCart = JSON.parse(appliedJobs));
  return jobCart;
};

export { addToDB, getAppliedJobs };