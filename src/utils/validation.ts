import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { RunnableValidationChains } from 'express-validator/lib/middlewares/schema';
import { EntityError, ErrorWithStatus } from '../module/error/schema';

export const validate = (validation: RunnableValidationChains<ValidationChain>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req);

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorObject = errors.mapped();
    const entityError = new EntityError({ errors: {} });

    console.log('errorObject', errorObject);

    //xử lý error object
    for (const key in errorObject) {
      const { msg } = errorObject[key]; // lấy message của từng cái lỗi
      //nếu msg có dạng ErrorWithStatus và status != 422 thì ném cho error default handler

      if (msg instanceof ErrorWithStatus && msg.status !== 422) {
        return next(msg);
      }

      //lưu các lỗi 422 từ errorObject vào entityError
      entityError.errors[key] = msg;
    }
    //ở đây nó xử lý lỗi luôn chứ ko ném về error default handler
    next(entityError);
    //hàm mapped khiến cho lỗi tường minh rõ ràng hơn
  };
};
