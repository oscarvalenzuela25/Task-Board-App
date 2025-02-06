import { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import { v4 as uuidv4 } from 'uuid';
import { GetTaskBoardUseCase } from '../../API/application/useCases/taskBoard/GetTaskBoardUseCase';
import { AddTaskBoardUseCase } from '../../API/application/useCases/taskBoard/AddTaskBoardUseCase';

const createNewTaskBoard = async (uuid: string) => {
  const addTaskBoardUseCase = new AddTaskBoardUseCase();
  await addTaskBoardUseCase.execute({
    uuid,
    title: 'My New Task Board',
  });
};

const getTaskBoard = async (uuid: string) => {
  const getTaskBoardUseCase = new GetTaskBoardUseCase();
  const response = await getTaskBoardUseCase.execute(uuid);
  return response;
};

const verifyParams = (Component: FC) => {
  return () => {
    const params = useParams();
    const [, navigate] = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const verify = async () => {
        const newUuid = uuidv4();
        if (!params.uuid) {
          await createNewTaskBoard(newUuid);
          navigate(`/${newUuid}`, { replace: true });
        } else {
          const response = await getTaskBoard(params.uuid);
          if (!response) {
            await createNewTaskBoard(params.uuid);
            navigate(`/${params.uuid}`, { replace: true });
          }
        }
        setIsLoading(false);
      };

      verify();
    }, [params, navigate]);

    useEffect(() => {
      const theme = localStorage.getItem('theme');
      if (theme) {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }, []);

    return isLoading ? null : <Component />;
  };
};

export default verifyParams;
