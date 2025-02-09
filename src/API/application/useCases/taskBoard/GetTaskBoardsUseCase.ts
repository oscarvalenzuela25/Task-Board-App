import { TaskBoardRepositoryImp } from '../../../infrastructure/repository/TaskBoardRepositoryImp';

export class GetTaskBoardsUseCase {
  private taskBoardRepositoryImp: TaskBoardRepositoryImp;

  constructor() {
    this.taskBoardRepositoryImp = new TaskBoardRepositoryImp();
  }

  async execute() {
    try {
      return await this.taskBoardRepositoryImp.getTaskBoards();
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
