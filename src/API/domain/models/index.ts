import Dexie, { type EntityTable } from 'dexie';
import { TaskBoardModel } from './TaskBoard';
import { TaskModel } from './Tasks';

export type DexieDB = Dexie & {
  taskBoard: EntityTable<TaskBoardModel, 'uuid'>;
  tasks: EntityTable<TaskModel, 'id'>;
};

export class DataBase {
  private static instance: DexieDB;

  public static getInstance(): DexieDB {
    if (!DataBase.instance) {
      DataBase.instance = new Dexie('TaskDB') as DexieDB;

      DataBase.instance.version(1).stores({
        taskBoard: '++uuid, title',
        tasks: '++id, taskBoardUuid, title, content, emoji, status',
      });
    }
    return DataBase.instance;
  }
}
