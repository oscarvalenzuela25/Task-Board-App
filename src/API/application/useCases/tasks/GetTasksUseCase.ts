import { TaskModel } from '../../../domain/models/Tasks';
import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class GetTasksUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(taskBoardUuid: string): Promise<TaskModel[]> {
    try {
      return await this.tasksRepositoryImp.getTasksByTaskBoardUuid(
        taskBoardUuid
      );
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
