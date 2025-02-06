import { AddTask } from '../../../domain/models/Tasks';
import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class AddTaskUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(payload: AddTask) {
    try {
      return await this.tasksRepositoryImp.addTask(payload);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
