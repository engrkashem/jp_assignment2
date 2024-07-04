import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interfaces/error.interface';

const validationErrorHandler = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const message: string[] = [];

  const errorMessageArr = Object.values(err?.errors).map(
    (error: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      if (error?.name === 'CastError') {
        message.push('Invalid Id.');
        return `${error.value} is not a valid ID!`;
      } else if (error?.name === 'ValidatorError') {
        message.push(`${error?.path} is not found.`);
        return `${error?.message}`;
      }
    },
  );

  return {
    message: errorMessageArr.join(' '),
  };
};

export default validationErrorHandler;
