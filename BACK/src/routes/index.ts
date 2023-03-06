import { Router } from 'express';
import { CardController } from '../controllers/CardController';
import { UserController } from '../controllers/UserController';
import { middlewareJWT } from '../middlewares/jwt';

const router = Router();

router.post('/cards',middlewareJWT, CardController.create);
router.put('/cards/:id', middlewareJWT, CardController.update);
router.get('/cards', middlewareJWT, CardController.get);
router.post('/signup', UserController.createUser);
router.post('/login', UserController.auth);

export { router };