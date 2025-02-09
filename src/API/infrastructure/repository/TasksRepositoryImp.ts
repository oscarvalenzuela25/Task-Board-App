import { envs } from '../../../config/envs';
import { AddTask, TaskModel, UpdateTask } from '../../domain/models/Tasks';
import { TasksRepository } from '../../domain/repository/TasksRepository';
import { TasksDatasourceIndexedDB } from '../datasource/indexedDB/TasksDatasourceIndexedDB';

export class TasksRepositoryImp implements TasksRepository {
  private tasksDatasourceIndexedDB: TasksDatasourceIndexedDB;

  constructor() {
    this.tasksDatasourceIndexedDB = new TasksDatasourceIndexedDB();
  }

  async getTasksByTaskBoardUuid(taskBoardUuid: string): Promise<TaskModel[]> {
    if (envs.DB_PROVIDER === 'INDEXED_DB') {
      return this.tasksDatasourceIndexedDB.getTasksByTaskBoardUuid(
        taskBoardUuid
      );
    }
    return [];
  }

  async getTasksById(id: number): Promise<TaskModel | undefined> {
    if (envs.DB_PROVIDER === 'INDEXED_DB') {
      return this.tasksDatasourceIndexedDB.getTasksById(id);
    }
    return;
  }

  async addTask(payload: AddTask): Promise<number> {
    if (envs.DB_PROVIDER === 'INDEXED_DB') {
      return this.tasksDatasourceIndexedDB.addTask(payload);
    }
    return 0;
  }

  async updateTaskById(id: number, payload: UpdateTask): Promise<number> {
    if (envs.DB_PROVIDER === 'INDEXED_DB') {
      return this.tasksDatasourceIndexedDB.updateTaskById(id, payload);
    }
    return 0;
  }

  async deleteTaskById(id: number): Promise<void> {
    if (envs.DB_PROVIDER === 'INDEXED_DB') {
      return this.tasksDatasourceIndexedDB.deleteTaskById(id);
    }
    return;
  }
}
