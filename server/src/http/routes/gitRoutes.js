
import express from 'express';
import responseHandler from '../middlewares/responseHandler';
import GitController from '../controllers/GitController';
const router = express.Router();

router.get('/repository', responseHandler(GitController.getRepository));
router.get('/commits', responseHandler(GitController.getCommits));
router.get('/branches', responseHandler(GitController.getBranches));
router.post('/branchCommits', responseHandler(GitController.branchCommits));
router.post('/commitDetails', responseHandler(GitController.commitDetails));

export default router;