import express from 'express';
import { urlApiRoutes } from './UrlApiRoutes';

export const routes = express.Router();

routes.use(urlApiRoutes);