import { ReactNode } from 'react';
import { DataBase } from '../../../domain/models';
import {
  TaskBoardModel,
  UpdateTaskBoard,
} from '../../../domain/models/TaskBoard';

export class TaskBoardDatasourceIndexedDB {
  private db;

  constructor() {
    this.db = DataBase.getInstance();
  }

  public async getTaskBoards(): Promise<TaskBoardModel[]> {
    return (await this.db.taskBoard.orderBy('createdAt').toArray()).reverse();
  }

  public async getTaskBoardByUuid(
    uuid: string
  ): Promise<TaskBoardModel | undefined> {
    return await this.db.taskBoard.get(uuid);
  }

  public async getTaskBoardBy(
    where: Record<string, ReactNode>
  ): Promise<TaskBoardModel[]> {
    return await this.db.taskBoard.where(where).toArray();
  }

  public async addTaskBoard(payload: TaskBoardModel): Promise<string> {
    return await this.db.taskBoard.add(payload);
  }

  public async updateTaskBoardBy(
    uuid: string,
    payload: UpdateTaskBoard
  ): Promise<number> {
    return await this.db.taskBoard.update(uuid, payload);
  }
}
