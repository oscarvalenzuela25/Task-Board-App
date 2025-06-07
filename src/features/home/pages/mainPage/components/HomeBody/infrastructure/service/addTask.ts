import { AddTaskUseCase } from '../../../../../../../../API/application/useCases/tasks/AddTaskUseCase';
import { AddTask } from '../../../../../../../../API/domain/models/Tasks';

const addTask = (payload: AddTask) => {
  const useCase = new AddTaskUseCase();
  return useCase.execute(payload);
};

export default addTask;
