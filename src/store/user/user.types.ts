export interface IUserState {
  info?: IUserInfo;
  isLoggedIn: boolean;
}

export interface IUserInfo {
  email?: string;
  name?: string;
}
