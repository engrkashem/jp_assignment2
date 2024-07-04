import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

/*** Parser middlewares ***/
app.use(express.json());
app.use(cors());

/*** Routes middlewares ***/
// app.use('/api', router);

// Root route of the server
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'running' });
  //   sendResponse(res, {
  //     success: true,
  //     message: 'Welcome to Assignment-4 Server. It is running absolutely fine.',
  //     data: null,
  //   });
});

// Global error handling middleware
// app.use(globalErrorHandler);

// not found API endpoint middleware
// app.use(notFound);

export default app;
