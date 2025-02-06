import { AddTask, TaskModel, UpdateTask } from '../models/Tasks';

export abstract class TasksRepository {
  abstract getTasksByTaskBoardUuid(taskBoardUuid: string): Promise<TaskModel[]>;
  abstract getTasksById(id: number): Promise<TaskModel | undefined>;
  abstract addTask(payload: AddTask): Promise<number>;
  abstract updateTaskById(id: number, payload: UpdateTask): Promise<number>;
  abstract deleteTaskById(id: number): Promise<void>;
}
