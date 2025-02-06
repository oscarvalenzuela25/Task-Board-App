import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class DeleteTaskUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(id: number) {
    try {
      return await this.tasksRepositoryImp.deleteTaskById(id);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
