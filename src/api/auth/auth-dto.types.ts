export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  token: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  confirmationPassword: string;
}

export interface IRegisterResponse {
  email: string;
}
