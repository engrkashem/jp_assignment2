class AppError extends Error {
  public statusCode: number;
  public flag: string;

  constructor(
    statusCode: number,
    message: string,
    flag: string = '',
    stack = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.flag = flag;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
