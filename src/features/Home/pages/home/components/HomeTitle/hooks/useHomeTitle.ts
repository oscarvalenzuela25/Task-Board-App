import { useState } from 'react';
import useUpdateTaskBoard from '../infrastructure/hooks/useUpdateTaskBoard';
import { useParams } from 'wouter';
import useGetTaskBoard from '../infrastructure/hooks/useGetTaskBoard';

const useHomeTitle = () => {
  const { uuid = '' } = useParams();
  const [updateMode, setUpdateMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const { handleUpdateTaskBoardIsLoading, handleUpdateTaskBoard } =
    useUpdateTaskBoard();
  const { taskBoard, fetchTaskBoardIsLoading, fetchTaskBoardIsFetching } =
    useGetTaskBoard(uuid);

  const handleToggleUpdateMode = () => {
    setUpdateMode(prev => !prev);
  };

  const handleChangeNewTitle = (value: string) => {
    setNewTitle(value);
  };

  const handleUpdateTitle = () => {
    handleUpdateTaskBoard({
      uuid,
      payload: { title: newTitle },
      callback: () => setUpdateMode(false),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !validations.isError) {
      handleUpdateTitle();
    }
  };

  const validations = {
    isError: !newTitle || newTitle?.length > 25,
    requestLoading: fetchTaskBoardIsFetching || handleUpdateTaskBoardIsLoading,
  };

  return {
    taskBoard,
    updateMode,
    newTitle,
    handleUpdateTaskBoardIsLoading,
    fetchTaskBoardIsLoading,
    fetchTaskBoardIsFetching,
    validations,
    handleToggleUpdateMode,
    handleChangeNewTitle,
    handleUpdateTitle,
    handleKeyDown,
  };
};

export default useHomeTitle;
