/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';

import { ZodError } from 'zod';
import AppError from '../errors/AppError';
import zodErrorhandler from '../errors/zodErrorHandler';
import {
  TErrorResponse,
  TGenericErrorResponse,
} from '../interfaces/error.interface';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode: number = 500;
  const message: string = err?.message || 'Something Went wrong';

  console.log(err);

  let errorFilteredData: TGenericErrorResponse = {} as TGenericErrorResponse;

  let errorResponseObj: TErrorResponse = {
    success: false,
    message: '',
  };

  if (err instanceof ZodError) {
    errorFilteredData = zodErrorhandler(err);
    errorResponseObj = {
      success: false,
      message: errorFilteredData.message,
    };
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    errorFilteredData.message = err?.name;

    if (err.flag === 'Unauthorized Access') {
      errorResponseObj = {
        success: false,
        message: err?.flag,
      };
    } else {
      errorResponseObj = {
        success: false,
        message: errorFilteredData.message,
      };
    }
  } else if (err instanceof Error) {
    errorFilteredData.message = err?.name;
    errorResponseObj = {
      success: false,
      message: errorFilteredData.message || message,
    };
  }

  return res.status(statusCode).json(errorResponseObj);
};

export default globalErrorHandler;
