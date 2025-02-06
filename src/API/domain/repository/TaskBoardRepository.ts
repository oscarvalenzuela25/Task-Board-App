import { ReactNode } from 'react';
import { TaskBoardModel, UpdateTaskBoard } from '../models/TaskBoard';

export abstract class TaskBoardRepository {
  abstract getTaskBoardByUuid(
    uuid: string
  ): Promise<TaskBoardModel | undefined>;
  abstract getTaskBoardBy(
    where: Record<string, ReactNode>
  ): Promise<TaskBoardModel[]>;
  abstract addTaskBoard(payload: TaskBoardModel): Promise<string>;
  abstract updateTaskBoardBy(
    uuid: string,
    payload: UpdateTaskBoard
  ): Promise<number>;
}
