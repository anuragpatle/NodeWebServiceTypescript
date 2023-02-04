/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';


// adding a post
const processXMIFile = async (req: Request, res: Response, next: NextFunction) => {
	// get the data from req.body
	let title: string = req.body.title;
	let body: string = req.body.body;
	// add the post
	// let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
	// 	title,
	// 	body
	// });

	console.log("create xmi", req.body);

	// return response
	return res.status(200).json({
		message: "okay sent"
	});
}

export default { processXMIFile };

