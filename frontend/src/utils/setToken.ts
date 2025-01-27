// import axios from 'axios';

const setToken = (token, axios) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `BEARER ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};
export default setToken;
