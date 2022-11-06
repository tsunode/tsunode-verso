import { IUser } from './usersService';
import { api } from './api';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  user: IUser;
  token: string;
}

export const createSession = async (
  data: IUserLogin
): Promise<IUserLoginResponse> => {
  const response = await api.post<IUserLoginResponse>('/sessions', data);

  return response.data;
};
