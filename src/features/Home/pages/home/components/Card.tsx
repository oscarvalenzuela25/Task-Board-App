import { FC } from 'react';
import StatusTask from '../../../commons/components/StatusTask';
import { cva } from 'class-variance-authority';
import { TailwindUtils } from '../../../../../utils/TailwindUtils';
import EmojiTask from '../../../commons/components/EmojiTask';
import { Mode, TaskModel } from '../../../../../API/domain/models/Tasks';

type Props = {
  task: TaskModel;
  handleShowModal: () => void;
  handleSetManageMode: (mode: Mode) => void;
  handleSetSelectedTask: (task: TaskModel) => void;
};

const cardVariants = cva(
  'flex w-full p-4 rounded-2xl justify-between gap-5 cursor-pointer transition hover:scale-105',
  {
    variants: {
      status: {
        DEFAULT: 'bg-light-gray-custom',
        IN_PROGRESS: 'bg-yellow-custom',
        DONE: 'bg-light-green-custom',
        CANCELLED: 'bg-light-pink-custom',
      },
    },
    defaultVariants: {
      status: 'DEFAULT',
    },
  }
);

const Card: FC<Props> = ({
  task,
  handleShowModal,
  handleSetManageMode,
  handleSetSelectedTask,
}) => {
  const classes = TailwindUtils.cn(cardVariants({ status: task.status }));

  return (
    <div
      className={classes}
      onClick={() => {
        handleSetManageMode('UPDATE');
        handleSetSelectedTask(task);
        handleShowModal();
      }}
    >
      <div className="flex gap-5">
        <EmojiTask emoji={task.emoji} />

        <div className="flex flex-col gap-2 pt-3">
          <p className="text-[20px]/[1.25rem] font-semibold">{task.title}</p>
          {task.content && (
            <p className="text-[16px]/[1rem] font-light">{task.content}</p>
          )}
        </div>
      </div>

      <StatusTask status={task.status} />
    </div>
  );
};

export default Card;
