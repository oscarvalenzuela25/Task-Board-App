import { TaskModel } from '../../../domain/models/Tasks';
import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class GetTaskUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(id: number): Promise<TaskModel | undefined> {
    try {
      return await this.tasksRepositoryImp.getTaskById(id);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
