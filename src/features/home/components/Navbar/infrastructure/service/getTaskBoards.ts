import { GetTaskBoardsUseCase } from "../../../../../../API/application/useCases/taskBoard/GetTaskBoardsUseCase";

const getTaskBoards = async () => {
  const useCase = new GetTaskBoardsUseCase();
  const taskBoards = await useCase.execute();
  return taskBoards;
};

export default getTaskBoards;
