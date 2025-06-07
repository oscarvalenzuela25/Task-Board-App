import { FC } from "react";
import { cva } from "class-variance-authority";
import { TailwindUtils } from "../../../utils/TailwindUtils";
import TimeIcon from "../../../icons/TimeIcon";
import DoneCircleIcon from "../../../icons/DoneCircleIcon";
import CloseCircleIcon from "../../../icons/CloseCircleIcon";
import AddCircleIcon from "../../../icons/AddCircleIcon";
import { Statuses } from "../../../API/domain/models/Tasks";
import GiftIcon from "../../../icons/GiftIcon";

type Props = {
  status: Statuses;
};

const statusTaskVariant = cva("rounded-xl p-3 h-min", {
  variants: {
    status: {
      DEFAULT: "bg-gray-custom",
      IN_PROGRESS: "bg-orange-custom",
      DONE: "bg-green-custom",
      CANCELLED: "bg-red-custom",
      ADD: "bg-orange-custom",
    },
  },
  defaultVariants: {
    status: "DEFAULT",
  },
});

const statusIcon = {
  DEFAULT: <GiftIcon />,
  IN_PROGRESS: <TimeIcon />,
  DONE: <DoneCircleIcon />,
  CANCELLED: <CloseCircleIcon />,
  ADD: <AddCircleIcon />,
};

const StatusTask: FC<Props> = ({ status }) => {
  const classes = TailwindUtils.cn(statusTaskVariant({ status }));
  return <div className={classes}>{statusIcon[status]}</div>;
};

export default StatusTask;
