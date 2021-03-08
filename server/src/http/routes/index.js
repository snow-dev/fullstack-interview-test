
/* Node libraries import section */
import Router from 'express/lib/router'
import gitRoutes from './gitRoutes';

// import routes endpoints

const router = Router();

// Apply routes to endpoints
router.use('/', gitRoutes);

export default router;