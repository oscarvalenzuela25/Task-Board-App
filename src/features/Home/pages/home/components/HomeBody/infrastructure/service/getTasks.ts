import { GetTaskUseCase } from '../../../../../../../../API/application/useCases/tasks/GetTaskUseCase';

const getTasks = async (taskBoardUuid: string) => {
  const useCase = new GetTaskUseCase();
  const data = await useCase.execute(taskBoardUuid);
  return data;
};

export default getTasks;
