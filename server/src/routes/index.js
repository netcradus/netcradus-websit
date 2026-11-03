import { Router } from 'express';
import healthRouter from './health.js';
import contactRouter from './contact.js';

const apiRouter = Router();

// Mount routes under /api/v1
apiRouter.use(healthRouter);
apiRouter.use(contactRouter);

export default apiRouter;
