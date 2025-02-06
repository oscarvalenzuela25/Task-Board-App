import { FC } from 'react';
import Card from '../Card';
import AddNewTaskCard from '../AddNewTaskCard';
import ManageTaskModal from '../ManageTaskModal';
import useHomeBody from './hooks/useHomeBody';
import CardSkeleton from '../../../../commons/components/CardSkeleton';

const HomeBody: FC = () => {
  const {
    tasks,
    taskSelected,
    manageMode,
    showManageTaskModal,
    validations,
    handleShowManageTaskModal,
    handleCloseManageTaskModal,
    handleSetSelectedTask,
    handleResetSelectedTask,
    handleChangeTaskSelected,
    handleSetManageMode,
    handleSubmitDeleteTask,
    handleSubmitTask,
  } = useHomeBody();
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex flex-col gap-5 max-h-[calc(100vh-380px)] overflow-y-scroll scrollbar-hide p-3">
        <CardSkeleton isLoading={validations.fetchIsLoading}>
          {tasks.map(task => (
            <Card
              key={task.id}
              task={task}
              handleShowModal={handleShowManageTaskModal}
              handleSetManageMode={handleSetManageMode}
              handleSetSelectedTask={handleSetSelectedTask}
            />
          ))}
        </CardSkeleton>
      </div>

      <div className="px-3">
        <AddNewTaskCard
          handleShowModal={handleShowManageTaskModal}
          handleSetManageMode={handleSetManageMode}
          handleResetSelectedTask={handleResetSelectedTask}
        />
      </div>
      {showManageTaskModal && (
        <ManageTaskModal
          isOpen={showManageTaskModal}
          task={taskSelected}
          manageMode={manageMode}
          validations={validations}
          handleChangeTask={handleChangeTaskSelected}
          handleSubmitTask={handleSubmitTask}
          handleDeleteTask={handleSubmitDeleteTask}
          handleCloseModal={handleCloseManageTaskModal}
        />
      )}
    </div>
  );
};

export default HomeBody;
