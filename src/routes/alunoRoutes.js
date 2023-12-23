import { Router } from 'express';
import alunoController from '../controller/AlunoController';

const router = new Router();

router.get('/', alunoController.index);

export default router;
