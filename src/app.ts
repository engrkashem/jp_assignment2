import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import sendResponse from './app/utils/sendResponse';

const app: Application = express();

/*** Parser middlewares ***/
app.use(express.json());
app.use(cors());

/*** Routes middlewares ***/
app.use('/api', router);

// Root route of the server
app.get('/', (req: Request, res: Response) => {
  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Welcome to JP Assignment-2 Server that is running.',
    data: null,
  });
});

// Global error handling middleware
app.use(globalErrorHandler);

// not found API endpoint middleware
app.use(notFound);

export default app;
