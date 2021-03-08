
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
			data: repository.data.source,
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
	static async getBranches (req, res) {
	    console.debug("Project controller -> ", req.body);
	    let branches = await GitService.getBranches();
			return Promise.resolve({
				data: branches.data,
				statusCode: 200,
				error: false
			});
	}
}