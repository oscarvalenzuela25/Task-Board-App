import { ReactNode } from 'react';
import { TaskModel } from '../../../domain/models/Tasks';
import { TasksRepositoryImp } from '../../../infrastructure/repository/TasksRepositoryImp';

export class GetTasksUseCase {
  private readonly tasksRepositoryImp: TasksRepositoryImp;

  constructor() {
    this.tasksRepositoryImp = new TasksRepositoryImp();
  }

  async execute(where: Record<string, ReactNode>): Promise<TaskModel[]> {
    try {
      return await this.tasksRepositoryImp.getTasksBy(where);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }
}
