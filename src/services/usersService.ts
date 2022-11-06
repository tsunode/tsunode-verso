import { api } from './api';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  title: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  avatarUrl: string | null;
}

export interface IRegisterData {
  name: string;
  surname: string;
  title: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const getUserMe = async (): Promise<IUser> => {
  const response = await api.get<IUser>('/users/me');

  return response.data;
};

export const registerUser = async (data: IRegisterData): Promise<IUser> => {
  const response = await api.post<IUser>('/users', data);

  return response.data;
};
