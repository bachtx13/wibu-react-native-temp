export enum EApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IErrorResponseObject {
  detail: string;
  target: string;
}

export interface IBaseResponseObject<T = {}> {
  message: string;
  data?: T;
  errors: IErrorResponseObject[];
  status: EResponseStatus;
}

export enum EResponseStatus {
  FAIL = 'fail',
  SUCCESS = 'success',
  error = 'error',
}

export enum EHeaderKey {
  AUTHORIZATION = 'authorization',
}
