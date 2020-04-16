import 'dotenv/config';

import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';
import LanguageController from './app/controllers/LanguageController';
import { languages } from './app/utils/languages';

class App {
    constructor() {
        this.server = express();

        this.server.use(express.json());
        this.server.use(cors());

        this.routes();
        this.repositories();
    }

    routes() {
        this.server.use(routes);
    }

    repositories() {
        languages.map(lang => LanguageController.store(lang));
    }
}

export default new App().server;