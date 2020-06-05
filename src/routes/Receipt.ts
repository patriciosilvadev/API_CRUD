import express, { Router } from 'express';

import { create, index } from '../controllers/ReceiptController';
// import authMiddleware from '../middlewares/auth';


const routes = Router();


// routes.use(authMiddleware);

routes.get('/list', index);
routes.post('/new', create);

export default routes;
