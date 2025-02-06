import { UpdateTaskBoardUseCase } from '../../../../../../../../API/application/useCases/taskBoard/UpdateTaskBoardUseCase';
import { TaskBoardModel } from '../../../../../../../../API/domain/models/TaskBoard';
import { Payload } from '../hooks/useUpdateTaskBoard';

const updateTaskBoard = async (
  uuid: string,
  payload: Payload
): Promise<TaskBoardModel | undefined> => {
  const useCase = new UpdateTaskBoardUseCase();
  return await useCase.execute(uuid, payload);
};

export default updateTaskBoard;
