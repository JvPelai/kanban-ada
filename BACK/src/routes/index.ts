import { Router } from 'express';

const router = Router();

router.post('/login', UserController.create);
router.post('/users/auth', UserController.auth);
router.get('/cards', UserController.getUserTodoItems);
router.post('/cards', CardController.create);
router.put('/cards/:id', CardController.update);
router.delete('/cards/:id', CardController.delete);

export { router };