import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

export const errorHandler = (error: any, request: Request, response: Response) => {
  console.log(`[ERROR] : ${error.message}`)
  return response.status(error.httpStatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: error.statusCode || '500',
    message: error.message
  });
};