import { DataBase, DexieDB } from '../../../domain/models';
import { AddTask, TaskModel, UpdateTask } from '../../../domain/models/Tasks';

export class TasksDatasourceIndexedDB {
  private db: DexieDB;

  constructor() {
    this.db = DataBase.getInstance();
  }

  async getTasksByTaskBoardUuid(taskBoardUuid: string): Promise<TaskModel[]> {
    return (await this.db.tasks.where({ taskBoardUuid }).toArray()).reverse();
  }

  async getTasksById(id: number): Promise<TaskModel | undefined> {
    return await this.db.tasks.get(id);
  }

  async addTask(payload: AddTask): Promise<number> {
    return await this.db.tasks.add(payload);
  }

  async updateTaskById(id: number, payload: UpdateTask): Promise<number> {
    return await this.db.tasks.update(id, payload);
  }

  async deleteTaskById(id: number): Promise<void> {
    return await this.db.tasks.delete(id);
  }
}
