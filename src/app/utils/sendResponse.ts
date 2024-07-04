import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  status: number;
  message: string;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const responseObject: TResponse<T> = {} as TResponse<T>;
  responseObject.success = data?.success;
  responseObject.message = data?.message;

  responseObject.data = data?.data;
  res.status(data?.status).json(responseObject);
};

export default sendResponse;
