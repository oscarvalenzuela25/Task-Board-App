import { ReactNode } from "react";
import { TaskBoardModel, UpdateTaskBoard } from "../../domain/models/TaskBoard";
import { TaskBoardRepository } from "../../domain/repository/TaskBoardRepository";
import { TaskBoardDatasourceIndexedDB } from "../datasource/indexedDB/TaskBoardDatasourceIndexedDB";
import { envs } from "../../../config/envs";

export class TaskBoardRepositoryImp implements TaskBoardRepository {
  private taskBoardDatasourceIndexedDB: TaskBoardDatasourceIndexedDB;

  constructor() {
    this.taskBoardDatasourceIndexedDB = new TaskBoardDatasourceIndexedDB();
  }

  public async getTaskBoards(): Promise<TaskBoardModel[]> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.taskBoardDatasourceIndexedDB.getTaskBoards();
    }
    return [];
  }

  public async getTaskBoardByUuid(
    uuid: string
  ): Promise<TaskBoardModel | undefined> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.taskBoardDatasourceIndexedDB.getTaskBoardByUuid(uuid);
    }
    return;
  }

  public async getTaskBoarsdBy(
    where: Record<string, ReactNode>
  ): Promise<TaskBoardModel[]> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.taskBoardDatasourceIndexedDB.getTaskBoarsdBy(where);
    }
    return [];
  }

  public async addTaskBoard(payload: TaskBoardModel): Promise<string> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.taskBoardDatasourceIndexedDB.addTaskBoard(payload);
    }
    return "";
  }

  public async updateTaskBoardBy(
    uuid: string,
    payload: UpdateTaskBoard
  ): Promise<number> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.taskBoardDatasourceIndexedDB.updateTaskBoardBy(uuid, payload);
    }
    return 0;
  }
}
