import { CancelToken } from 'axios';
import { IUser } from './usersService';
import { api } from './api';

export interface IProject {
  id: string;
  user: IUser;
  title: string;
  description: string;
  link: string;
  adtionalLink?: string;
  thumb: string;
  createdAt: Date;
  updatedAt: Date;
  elapsedTime: string;
  thumbUrl: string;
}

interface IGetProjectFilter {
  page: number;
  pageSize?: number;
  q?: string | null;
  cancelToken: CancelToken;
}

export const getAllProjects = async ({
  page,
  pageSize = 10,
  q,
  cancelToken,
}: IGetProjectFilter): Promise<IProject[]> => {
  const response = await api.get<IProject[]>('/projects', {
    params: {
      page,
      pageSize,
      q,
    },
    cancelToken,
  });

  return response.data;
};

export const storeProject = async (data: FormData) => {
  const response = await api.post('/projects', data);

  return response.data;
};
