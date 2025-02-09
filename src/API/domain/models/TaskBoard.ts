export type TaskBoardModel = {
  uuid: string;
  title: string;
  createdAt?: Date;
};

export type UpdateTaskBoard = {
  title: string;
};
