import { FC } from 'react';
import StatusTask from './StatusTask';
import CheckCircleIcon from '../../../../icons/CheckCircleIcon';
import { cva } from 'class-variance-authority';
import { Status } from '../../../../API/domain/models/Tasks';

type Input = {
  name: string;
  value: string;
};

type Props = {
  status: Status;
  statusSelected: Status;
  handleSelectedStatus: ({ name, value }: Input) => void;
};

const statusLabel = {
  DEFAULT: 'To do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Completed',
  CANCELLED: 'Won’t Do',
};

const statusInputVariants = cva(
  'flex justify-between items-center border-2 rounded-2xl min-w-[250px] cursor-pointer gap-2 p-1 pr-3',
  {
    variants: {
      isSelected: {
        selected: 'border-blue-custom',
        unSelected: 'border-light-gray-custom',
      },
    },
    defaultVariants: {
      isSelected: 'unSelected',
    },
  }
);

const StatusInput: FC<Props> = ({
  status,
  statusSelected,
  handleSelectedStatus,
}) => {
  const isSelected = status === statusSelected;
  const isSelectedRaw = isSelected ? 'selected' : 'unSelected';
  const classes = statusInputVariants({ isSelected: isSelectedRaw });
  return (
    <div
      className={classes}
      onClick={() => handleSelectedStatus({ name: 'status', value: status })}
    >
      <div className="flex items-center gap-3">
        <StatusTask status={status} />
        <p className="text-[16px]">{statusLabel[status]}</p>
      </div>

      {isSelected && <CheckCircleIcon className="fill-blue-custom" />}
    </div>
  );
};

export default StatusInput;
