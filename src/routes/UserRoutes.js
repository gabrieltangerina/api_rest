import { Router } from 'express';
import userController from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
