import express from 'express';
const routes = express();

//Controller Imports
import basicController from './controllers/basicController'
import userController from './controllers/userController'
import projectController from './controllers/projectController'
import commentController from './controllers/commentController'
import user from './models/user';
import teamController from './controllers/teamController';

//basic Routes
const app = express();
routes.get('/', basicController.get);

//User Routes
routes.post('/signup', userController.post);

//Project Routes
routes.post('/newproject', projectController.post);
routes.post('/newteam', teamController.post);
routes.get('/projects', projectController.getAll); //not single
routes.post('/comment', commentController.post); //post comments to a project
routes.put('/addTeamMember', teamController.addMember);
export default routes;