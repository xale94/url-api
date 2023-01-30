import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

export const errorHandler = (err: any, req: Request, res: Response) => {
  console.log(`[ERROR] : ${err.message}`);
  return res.status(err.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: err.statusCode || '500',
    message: err.message
  });
};