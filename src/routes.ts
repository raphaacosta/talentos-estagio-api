import express from 'express';

import PostController from './controllers/PostController';

const routes = express.Router();

const postController = new PostController;

routes.post('/posts', postController.create);
routes.get('/posts', postController.list);

export default routes;