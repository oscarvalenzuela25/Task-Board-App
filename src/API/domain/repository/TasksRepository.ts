import { ReactNode } from 'react';
import { AddTask, TaskModel, UpdateTask } from '../models/Tasks';

export abstract class TasksRepository {
  abstract getTasksBy(where: Record<string, ReactNode>): Promise<TaskModel[]>;
  abstract getTaskById(id: number): Promise<TaskModel | undefined>;
  abstract addTask(payload: AddTask): Promise<number>;
  abstract updateTaskById(id: number, payload: UpdateTask): Promise<number>;
  abstract deleteTaskById(id: number): Promise<void>;
}
