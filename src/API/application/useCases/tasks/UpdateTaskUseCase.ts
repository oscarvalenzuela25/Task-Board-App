import { UpdateTask } from '../../../domain/models/Tasks';
import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class UpdateTaskUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(id: number, payload: UpdateTask) {
    try {
      return await this.tasksRepositoryImp.updateTaskById(id, payload);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
