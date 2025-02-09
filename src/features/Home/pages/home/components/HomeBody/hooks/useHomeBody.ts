import { useState } from 'react';
import {
  Input,
  Mode,
  TaskModel,
} from '../../../../../../../API/domain/models/Tasks';
import useGetTasks from '../infrastructure/hooks/useGetTasks';
import { useParams } from 'wouter';
import useAddTask from '../infrastructure/hooks/useAddTask';
import useUpdateTask from '../infrastructure/hooks/useUpdateTask ';
import useDeleteTask from '../infrastructure/hooks/useDeleteTask';

const taskDefault: TaskModel = {
  id: 0,
  taskBoardUuid: '',
  title: '',
  content: '',
  emoji: '',
  status: 'DEFAULT',
};

const useHomeBody = () => {
  const { uuid = '' } = useParams();
  const [showManageTaskModal, setShowManageTaskModal] = useState(false);
  const [taskSelected, setSelectedTask] = useState<TaskModel>(taskDefault);
  const [manageMode, setManageMode] = useState<Mode>('ADD');

  const { tasks, getTasksIsFetching } = useGetTasks(uuid);
  const { handleAddNewTask, handleAddNewTaskIsLoading } = useAddTask();
  const { handleUpdateTask, handleUpdateTaskIsLoading } = useUpdateTask();
  const { handleDeleteTask, handleDeleteTaskIsLoading } = useDeleteTask();

  const handleShowManageTaskModal = () => {
    setShowManageTaskModal(true);
  };

  const handleCloseManageTaskModal = () => {
    setShowManageTaskModal(false);
  };

  const handleSetSelectedTask = (task: TaskModel) => {
    setSelectedTask(task);
  };

  const handleResetSelectedTask = () => {
    setSelectedTask(taskDefault);
  };

  const handleChangeTaskSelected = ({ name, value }: Input) => {
    setSelectedTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSetManageMode = (mode: Mode) => {
    setManageMode(mode);
  };

  const handleSubmitAddNewTask = () => {
    handleAddNewTask({
      payload: {
        taskBoardUuid: uuid,
        title: taskSelected.title,
        content: taskSelected.content,
        emoji: taskSelected.emoji,
        status: taskSelected.status,
        createdAt: new Date(),
      },
      callback: handleCloseManageTaskModal,
    });
  };

  const handleSubmitUpdateTask = () => {
    handleUpdateTask({
      id: taskSelected.id,
      payload: {
        title: taskSelected.title,
        content: taskSelected.content,
        emoji: taskSelected.emoji,
        status: taskSelected.status,
      },
      callback: handleCloseManageTaskModal,
    });
  };

  const handleSubmitDeleteTask = () => {
    handleDeleteTask({
      id: taskSelected.id,
      callback: handleCloseManageTaskModal,
    });
  };

  const handleSubmitTask = () => {
    if (manageMode === 'ADD') {
      handleSubmitAddNewTask();
    } else {
      handleSubmitUpdateTask();
    }
  };

  const validations = {
    fetchIsLoading: getTasksIsFetching,
    mutationIsLoading:
      handleAddNewTaskIsLoading ||
      handleUpdateTaskIsLoading ||
      handleDeleteTaskIsLoading,
    validSubmit:
      !!taskSelected.title && !!taskSelected.emoji && !!taskSelected.status,
  };

  return {
    tasks,
    taskSelected,
    manageMode,
    showManageTaskModal,
    getTasksIsFetching,
    handleAddNewTaskIsLoading,
    handleUpdateTaskIsLoading,
    handleDeleteTaskIsLoading,
    validations,
    handleShowManageTaskModal,
    handleCloseManageTaskModal,
    handleSetSelectedTask,
    handleResetSelectedTask,
    handleChangeTaskSelected,
    handleSetManageMode,
    handleSubmitAddNewTask,
    handleSubmitUpdateTask,
    handleSubmitDeleteTask,
    handleSubmitTask,
  };
};

export default useHomeBody;
