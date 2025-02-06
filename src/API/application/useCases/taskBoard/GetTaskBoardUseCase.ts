import { TaskBoardModel } from '../../../domain/models/TaskBoard';
import { TaskBoardRepositoryImp } from '../../../infrastructure/repository/TaskBoardRepositoryImp';

export class GetTaskBoardUseCase {
  private taskBoardRepositoryImp: TaskBoardRepositoryImp;

  constructor() {
    this.taskBoardRepositoryImp = new TaskBoardRepositoryImp();
  }

  public async execute(uuid: string): Promise<TaskBoardModel | undefined> {
    try {
      const response = await this.taskBoardRepositoryImp.getTaskBoardByUuid(
        uuid
      );
      return response;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
