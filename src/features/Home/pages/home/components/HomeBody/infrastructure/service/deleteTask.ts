import { DeleteTaskUseCase } from '../../../../../../../../API/application/useCases/tasks/DeleteTaskUseCase';

const deleteTask = (id: number) => {
  const useCase = new DeleteTaskUseCase();
  return useCase.execute(id);
};

export default deleteTask;
