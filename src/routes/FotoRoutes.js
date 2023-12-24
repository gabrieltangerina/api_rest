import { Router } from 'express';

import fotoController from '../controller/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// foto é o name do input
router.post('/', loginRequired, fotoController.store);

export default router;
