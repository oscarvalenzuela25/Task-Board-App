import { GetTaskBoardUseCase } from '../../../../../../../../API/application/useCases/taskBoard/GetTaskBoardUseCase';
import { TaskBoardModel } from '../../../../../../../../API/domain/models/TaskBoard';

const getTaskBoard = async (
  uuid: string
): Promise<TaskBoardModel | undefined> => {
  const useCase = new GetTaskBoardUseCase();
  const response = await useCase.execute(uuid);
  return response;
};

export default getTaskBoard;
