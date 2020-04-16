import { Router } from 'express';
import LanguageController from './app/controllers/LanguageController';
import RepositoryController from './app/controllers/RepositoryController';

const routes = new Router();

routes.get('/languages', LanguageController.index);
routes.get('/languages/:lang', LanguageController.getByLanguage);
routes.get('/repositories/:id', RepositoryController.index);

export default routes;