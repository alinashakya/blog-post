import axios from 'axios';

export const FETCH_POST = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=test1234';


export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	};
}

export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}