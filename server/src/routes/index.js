import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import productsRouter from './products';
import featuredProductsRouter from './featuredProducts';
import rulesRouter from './rules-faq';
import ordersRouter from './orders';
import categoryRouter from './categories'; 
import picturesRouter from './pictures';

import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();

router.use('/auth', authRouter);

router.route('*')
    // .post(tokenMiddleware, isLoggedIn)
    // .put(tokenMiddleware, isLoggedIn)
    // .delete(tokenMiddleware, isLoggedIn);
;

router.use('/products', productsRouter);
router.use('/featuredProducts', featuredProductsRouter);
router.use('/policy', rulesRouter);
router.use('/order', ordersRouter);
router.use('/category', categoryRouter);
router.use('/pictures', picturesRouter);

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);
router.use('/users', usersRouter);

export default router;