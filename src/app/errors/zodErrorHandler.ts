import { ZodError, ZodIssue } from 'zod';
import { TGenericErrorResponse } from '../interfaces/error.interface';

const zodErrorhandler = (err: ZodError): TGenericErrorResponse => {
  let message = 'Validation Error';
  const paths: string[] = err?.issues?.map((issue: ZodIssue) => {
    if (issue?.code === 'custom') {
      message = issue?.message;
    }

    return `${issue?.path[issue?.path.length - 1]} is required.`;
  });

  message = paths.join(' ') || 'Something wrong happened with data validation';

  return {
    message,
  };
};

export default zodErrorhandler;
