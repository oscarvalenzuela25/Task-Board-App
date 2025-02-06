import { GetTasksUseCase } from '../../../../../../../../API/application/useCases/tasks/GetTasksUseCase';

const getTasks = async (taskBoardUuid: string) => {
  const useCase = new GetTasksUseCase();
  const data = await useCase.execute(taskBoardUuid);
  return data;
};

export default getTasks;
