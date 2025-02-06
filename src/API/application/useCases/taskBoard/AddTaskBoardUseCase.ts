import { TaskBoardModel } from '../../../domain/models/TaskBoard';
import { TaskBoardRepositoryImp } from '../../../infrastructure/repository/TaskBoardRepositoryImp';

export class AddTaskBoardUseCase {
  private taskBoardRepositoryImp: TaskBoardRepositoryImp;

  constructor() {
    this.taskBoardRepositoryImp = new TaskBoardRepositoryImp();
  }

  public async execute(title: TaskBoardModel): Promise<string> {
    const taskBoard = await this.taskBoardRepositoryImp.addTaskBoard(title);
    return taskBoard;
  }
}
