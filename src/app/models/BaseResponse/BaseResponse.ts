export abstract class BaseResponse<T> {
  results: T | any;
  errors: any | [];
  success?: boolean;
}
