import express from 'express';
const routes = express();

//Controller Imports
import basicController from './controllers/basicController'
import userController from './controllers/userController'
import projectController from './controllers/projectController'
import commentController from './controllers/commentController'
import user from './models/user';
import cardController from './controllers/cardController';

//basic Routes
const app = express();
routes.get('/', basicController.get);

//User Routes
routes.post('/signup', userController.post);
routes.get('/users', userController.getAll);
routes.post('/login', userController.authenticate);
//Project Routes
routes.post('/newproject', projectController.post);
routes.post('/newCard', cardController.post)
routes.get('/cards', cardController.getAll); //not single
routes.get('/projects', projectController.getAll); //not single
routes.post('/comment', commentController.post); //post comments to a project
routes.put('/addTeamMember', projectController.addMember);
routes.put('/editComment', commentController.editComment);
routes.put('/editCard', cardController.editCard);
routes.put('/removeMember', projectController.removeMember);

export default routes;