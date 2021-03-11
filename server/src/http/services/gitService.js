import env from './../../env' // eslint-disable-line

import axios from 'axios';

export default class GitService {
	/**
	 * Request repository data from GitHub.
	 * @returns {Promise<void>}
	 */
	static async getRepositoryData() {
		try {
			let config = {
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			}
			
			return await axios.get( `${process.env.GITHUB_URL}`, config ).then( response => {
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
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			}
			
			return await axios.get( `${process.env.GITHUB_URL}/commits?sha=${branch}`, config ).then( response => {
				
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
			Authorization: `token ${process.env.GITHUB_TOKEN}`,
		}
		// https://api.github.com/repos/snow-dev/fullstack-interview-test/commits\?sha\=master
		return await axios.get( `${process.env.GITHUB_URL}/commits?sha=${sha}`, config ).then( response => {
			if (response.data.parents.length > 0) {
				commits.push(response.data.commit);
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
				Authorization: `token ${process.env.GITHUB_TOKEN}`,
			}
			
			return await axios.get( `${process.env.GITHUB_URL}/branches`, config ).then( response => {
				// console.debug( 'GitService: ', response );
				return response;
			} ).catch( error => {
				return error;
			} );
		} catch (err) {
			throw err;
		}
	}
	
	static async commitDetails(commitSha) {
		try {
			let config = { Authorization: `token ${process.env.GITHUB_TOKEN}`};
			return await axios.get( `${process.env.GITHUB_URL}/commits/${commitSha}`, config ).then( response => {
				
				return response.data;
			} ).catch( error => {
				return error;
			} );
			
		} catch (err) {
			throw err;
		}
	}
	
}