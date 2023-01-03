import axios from 'axios';

const service = axios.create({
	baseURL: 'http://43.139.211.46:8070/',
//	baseURL: '/api/',
	timeout: 10000, 
	withCredentials: true,
	// headers: {
	// //	"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
	// 	 "Access-Control-Allow-Origin": "*",
	// 	 "Accept":"*/*"
	// },
})


service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
);

service.interceptors.response.use(
	response => {
		//responce.header("Access-Control-Allow-Origin","*");
		return response
	},
	error => {
		return Promise.reject(error);
	}
);

export default service;