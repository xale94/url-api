import express, { Request, Response } from 'express';
import { services } from '../../services'

export const urlApiRoutes = express.Router();

urlApiRoutes.get('/urls', (req: Request, res: Response): void => {
  const { a, b } = req.body;
  const service = services.UrlApiService()
  // res.json({
  //   success: false,
  //   message: 'Missing parameters',
  // });
});