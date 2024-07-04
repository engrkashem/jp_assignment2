/* eslint-disable @typescript-eslint/no-explicit-any */

import { TGenericErrorResponse } from '../interfaces/error.interface';

const duplicateKeyErrorHandler = (err: any): TGenericErrorResponse => {
  const message = `${Object.values(
    err?.keyValue,
  )} already exists in the database`;

  return {
    message,
  };
};

export default duplicateKeyErrorHandler;
