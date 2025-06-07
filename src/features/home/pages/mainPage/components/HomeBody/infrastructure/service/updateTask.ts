import { UpdateTaskUseCase } from '../../../../../../../../API/application/useCases/tasks/UpdateTaskUseCase';
import { UpdateTask } from '../../../../../../../../API/domain/models/Tasks';

const updateTask = (id: number, payload: UpdateTask) => {
  const useCase = new UpdateTaskUseCase();
  return useCase.execute(id, payload);
};

export default updateTask;
