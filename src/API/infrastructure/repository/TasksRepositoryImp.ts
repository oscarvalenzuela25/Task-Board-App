import { ReactNode } from "react";
import { envs } from "../../../config/envs";
import { AddTask, TaskModel, UpdateTask } from "../../domain/models/Tasks";
import { TasksRepository } from "../../domain/repository/TasksRepository";
import { TasksDatasourceIndexedDB } from "../datasource/indexedDB/TasksDatasourceIndexedDB";

export class TasksRepositoryImp implements TasksRepository {
  private tasksDatasourceIndexedDB: TasksDatasourceIndexedDB;

  constructor() {
    this.tasksDatasourceIndexedDB = new TasksDatasourceIndexedDB();
  }

  async getTasksBy(where: Record<string, ReactNode>): Promise<TaskModel[]> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.tasksDatasourceIndexedDB.getTasksBy(where);
    }
    return [];
  }

  async getTaskById(id: number): Promise<TaskModel | undefined> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.tasksDatasourceIndexedDB.getTaskById(id);
    }
    return;
  }

  async addTask(payload: AddTask): Promise<number> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.tasksDatasourceIndexedDB.addTask(payload);
    }
    return 0;
  }

  async updateTaskById(id: number, payload: UpdateTask): Promise<number> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.tasksDatasourceIndexedDB.updateTaskById(id, payload);
    }
    return 0;
  }

  async deleteTaskById(id: number): Promise<void> {
    if (envs.VITE_DB_PROVIDER === "INDEXED_DB") {
      return this.tasksDatasourceIndexedDB.deleteTaskById(id);
    }
    return;
  }
}
