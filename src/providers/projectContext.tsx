import axios from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ICreateProject } from '../pages/newProject';
import {
  getAllProjects,
  IProject,
  storeProject,
} from '../services/projectsService';
import { useAuth } from './authContext';

interface IProjectContext {
  projects: IProject[];
  createProject(data: ICreateProject): void;
  setProjectPage(newPage: number): void;
  handleFilterProject(data: { project: string }): void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

type ICreateProjectKeys = keyof Omit<ICreateProject, 'thumb'>;

const ProjectContext = createContext<IProjectContext>({} as IProjectContext);

export const ProjectProvider = ({ children }: IAuthProviderProps) => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const { CancelToken } = axios;
    const source = CancelToken.source();

    async function getProjects() {
      try {
        const response = await getAllProjects({
          page,
          q: searchParams.get('q'),
          cancelToken: source.token,
        });

        setProjects([...projects, ...response]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getProjects();

    return () => {
      source.cancel();
    };
  }, [page, searchParams]);

  async function createProject(data: ICreateProject) {
    try {
      const form = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === 'thumb') {
          form.append('thumb', data.thumb[0]);
          return;
        }

        form.append(key, data[key as ICreateProjectKeys]);
      });

      const response = await storeProject(form);
      setProjects([{ ...response, user }, ...projects]);

      toast.success('Projeto adicionado com sucesso');
      navigate('/home');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao adicionar projeto');
    }
  }

  function handleFilterProject(data: { project: string }) {
    setProjects([]);
    setSearchParams({
      q: data.project,
    });
    setPage(1);
  }

  function setProjectPage(newPage: number) {
    setPage((prevPages) => prevPages + newPage);
  }

  return (
    <ProjectContext.Provider
      value={{ createProject, projects, setProjectPage, handleFilterProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
