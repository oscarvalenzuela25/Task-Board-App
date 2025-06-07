import { FC } from "react";
import StatusTask from "../../../components/StatusTask";
import { Mode } from "../../../../../API/domain/models/Tasks";

type Props = {
  handleShowModal: VoidFunction;
  handleSetManageMode: (mode: Mode) => void;
  handleResetSelectedTask: VoidFunction;
};

const AddNewTaskCard: FC<Props> = ({
  handleShowModal,
  handleSetManageMode,
  handleResetSelectedTask,
}) => {
  return (
    <div
      onClick={() => {
        handleResetSelectedTask();
        handleSetManageMode("ADD");
        handleShowModal();
      }}
      className={
        "flex w-full p-4 rounded-xl justify-between gap-5 bg-light-beige-custom cursor-pointer transition hover:scale-105"
      }
    >
      <div className="flex gap-5">
        <StatusTask status={"ADD"} />
        <p className="text-[16px]/[1rem] font-semibold pt-4">Add new Task</p>
      </div>
    </div>
  );
};

export default AddNewTaskCard;
