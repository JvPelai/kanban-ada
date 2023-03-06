import { Router } from 'express';
import { CardController } from '../controllers/CardController';

const router = Router();

router.post('/cards', CardController.create);
router.put('/cards/:id', CardController.update);
router.post('/login');
router.post('/users/auth');
router.get('/cards');
router.delete('/cards/:id');

export { router };