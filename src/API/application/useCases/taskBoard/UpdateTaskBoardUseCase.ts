import { UpdateTaskBoard } from '../../../domain/models/TaskBoard';
import { TaskBoardRepositoryImp } from '../../../infrastructure/repository/TaskBoardRepositoryImp';

export class UpdateTaskBoardUseCase {
  private taskBoardRepositoryImp: TaskBoardRepositoryImp;

  constructor() {
    this.taskBoardRepositoryImp = new TaskBoardRepositoryImp();
  }

  async execute(uuid: string, payload: UpdateTaskBoard) {
    try {
      const response = await this.taskBoardRepositoryImp.updateTaskBoardBy(
        uuid,
        payload
      );
      if (!response) {
        throw new Error('Error updating task board title');
      }
      return await this.taskBoardRepositoryImp.getTaskBoardByUuid(uuid);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
