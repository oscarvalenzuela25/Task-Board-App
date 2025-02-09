import { FC } from 'react';
import BaseDrawer from '../../../../../components/BaseDrawer';
import AddIcon from '../../../../../icons/AddIcon';
import { Texts } from '../../../../../utils/Texts';
import { TaskBoardModel } from '../../../../../API/domain/models/TaskBoard';
import logo from '../../../../../assets/logo.svg';

type Props = {
  isOpen: boolean;
  taskBoards: TaskBoardModel[];
  handleGoToTaskBoard: (uuid: string) => void;
  handleCreateNewTaskBoard: () => void;
  handleCloseDrawer: () => void;
};

const OptionDrawer: FC<Props> = ({
  isOpen,
  taskBoards,
  handleGoToTaskBoard,
  handleCreateNewTaskBoard,
  handleCloseDrawer,
}) => {
  return (
    <BaseDrawer isOpen={isOpen} handleCloseDrawer={handleCloseDrawer}>
      <div className="flex flex-col bg-white-custom h-full gap-4 px-4 py-8 w-70">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <p className="text-text-custom text-[20px] font-medium">
            My Task Bard App
          </p>
        </div>
        <div
          onClick={handleCreateNewTaskBoard}
          className="flex items-center w-full gap-2 cursor-pointer trasition duration-500 hover:bg-black-translucent-custom rounded-lg p-3"
        >
          <AddIcon className="stroke-text-custom fill-text-custom" />
          <p className="text-text-custom text-[16px]">New Task Board</p>
        </div>

        <div className="flex flex-col">
          <p className="text-text-custom text-[20px]">Your Boards</p>
          <div className="flex flex-col rounded-lg w-full p-0 my-2 max-h-[calc(100vh-240px)] scrollbar-hide overflow-y-scroll">
            {taskBoards.map(({ uuid, title }) => (
              <p
                key={uuid}
                onClick={() => handleGoToTaskBoard(uuid)}
                className="text-text-custom text-[16px] cursor-pointer trasition duration-500 hover:bg-black-translucent-custom p-2 cursor-point"
              >
                {Texts.maxLength(title, 30)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </BaseDrawer>
  );
};

export default OptionDrawer;
