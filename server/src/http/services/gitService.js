import axios from 'axios';

export default class GitService {
	/**
	 * Request repository data from GitHub.
	 * @returns {Promise<void>}
	 */
	static async getRepositoryData() {
		try {
			let config = {
				headers: {
					Authorization: 'token 7450267ed33cee926b8e03177965083d9712a9af',
				}
			}
			return await axios.get( 'https://api.github.com/repos/snow-dev/fullstack-interview-test', config ).then( response => {
				// console.debug( 'GitService: ', response.data.source );
				return response;
			} ).catch( error => {
				return error;
			} )
		}	catch (err) {
			throw err;
		}
	}
	
	/**
	 * Request commits lists from repository.
	 * @returns {Promise<any>}
	 */
	static async getCommits(branch) {
		try {
			let config = {
				headers: {
					Authorization: 'token 7450267ed33cee926b8e03177965083d9712a9af',
				}
			}
			
			return await axios.get( `https://api.github.com/repos/snow-dev/fullstack-interview-test/commits?sha=${branch}`, config ).then( response => {
				// console.debug( 'GitService: ', response.data );
				return response.data;
			} ).catch( error => {
				return error;
			} );
		} catch (err) {
			throw err;
		}
	}
	
	static async getParents(sha, commits = []) {
		let config = {
			headers: {
				Authorization: 'token 7450267ed33cee926b8e03177965083d9712a9af',
			}
		}
		// https://api.github.com/repos/snow-dev/fullstack-interview-test/commits\?sha\=master
		return await axios.get( `https://api.github.com/repos/snow-dev/fullstack-interview-test/commits?sha=${sha}`, config ).then( response => {
			if (response.data.parents.length > 0) {
				commits.push(response.data.commit);
				// console.debug( 'GitService: ', response.data.parents[0].sha );
				// console.debug( 'GitService: ', commits );
				this.getParents(response.data.parents[0].sha, commits)
			} else {
				return commits;
			}
		} ).catch( error => {
			return error;
		} );
	}
	
	/**
	 * Request branches list
	 * @returns {Promise<any>}
	 */
	static async getBranches() {
		try {
			let config = {
				headers: {
					Authorization: 'token 7450267ed33cee926b8e03177965083d9712a9af',
				}
			}
			
			return await axios.get( 'https://api.github.com/repos/snow-dev/fullstack-interview-test/branches', config ).then( response => {
				// console.debug( 'GitService: ', response.data );
				return response;
			} ).catch( error => {
				return error;
			} );
		} catch (err) {
			throw err;
		}
	}
	
}