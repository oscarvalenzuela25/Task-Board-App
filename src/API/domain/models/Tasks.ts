export type Status = 'DEFAULT' | 'IN_PROGRESS' | 'DONE' | 'CANCELLED';

export type Statuses = Status | 'ADD';

export type TaskModel = {
  id: number;
  taskBoardUuid: string;
  title: string;
  content: string;
  emoji: string;
  status: Status;
  createdAt?: Date;
};

export type AddTask = {
  taskBoardUuid: string;
  title: string;
  content: string;
  emoji: string;
  status: Status;
  createdAt?: Date;
};

export type UpdateTask = {
  title: string;
  content: string;
  emoji: string;
  status: Status;
};

export type Mode = 'ADD' | 'UPDATE';

export type Input = {
  name: string;
  value: string;
};
