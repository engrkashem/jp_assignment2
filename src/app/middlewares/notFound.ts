import { Request, Response } from 'express';

const notFound = async (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'Route not found',
  });
};

export default notFound;
