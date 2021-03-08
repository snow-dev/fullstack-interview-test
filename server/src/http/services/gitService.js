import axios from 'axios';

export default class GitService {
	/**
	 * Request repository data from GitHub.
	 * @returns {Promise<void>}
	 */
	static async getRepositoryData() {
		try {
			return await axios.get( 'https://api.github.com/repos/snow-dev/fullstack-interview-test' ).then( response => {
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
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	static async getCommits() {
		try {
			return await axios.get( 'https://api.github.com/repos/FlatDigital/fullstack-interview-test/commits' ).then( response => {
				// console.debug( 'GitService: ', response.data );
				return response;
			} ).catch( error => {
				return error;
			} );
		} catch (err) {
			throw err;
		}
	}
	
	static async getBranches() {
		try {
			return await axios.get( 'https://api.github.com/repos/FlatDigital/fullstack-interview-test/branches' ).then( response => {
				console.debug( 'GitService: ', response.data );
				return response;
			} ).catch( error => {
				return error;
			} );
		} catch (err) {
			throw err;
		}
	}
	
}