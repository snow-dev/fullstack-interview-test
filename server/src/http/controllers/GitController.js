
import GitService from '../services/gitService'; // eslint-disable-line

export default class GitController {
	/**
	 * Controller for get repository base data.
	 * @param req
	 * @param res
	 * @returns {Promise<{data, error: boolean, statusCode: number}>}
	 */
	static async getRepository (req, res) {
		
		let repository = await GitService.getRepositoryData();
		
		return Promise.resolve({
			data: repository,
			statusCode: 200,
			error: false
		});
	}
	
	/**
	 * Request list of commits
	 * @param req
	 * @param res
	 * @returns {Promise<{data: any, error: boolean, statusCode: number}>}
	 */
	static async getCommits (req, res) {
		let commits = await GitService.getCommits();
		return Promise.resolve({
			data: commits.data,
			statusCode: 200,
			error: false
		});
	}
	
	/**
	 * Controller for request branches.
	 * @param req
	 * @param res
	 * @returns {Promise<{data: any, error: boolean, statusCode: number}>}
	 */
	static async getBranches (req, res) {
		let branches = await GitService.getBranches();
		
		return Promise.resolve({
			data: branches.data,
			statusCode: 200,
			error: false
		});
	}
	
	static async branchCommits (req, res) {
		let commitsBranch = await GitService.getCommits(req.body.branch);
		
		// console.debug("Project controller -> ", commitsBranch);
		
		return Promise.resolve({
			data: commitsBranch,
			statusCode: 200,
			error: false
		});
	}
}