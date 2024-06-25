import { Request, Response, NextFunction } from 'express';

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).json({ status: 500, type: 'Error', message: 'An unexpected error occurred', error: err.message });
}

export default errorHandler;

