import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AddTask } from '../../../../../../../../API/domain/models/Tasks';
import addTask from '../service/addTask';
import { toast } from 'sonner';

type Args = {
  payload: AddTask;
  callback: () => void;
};

const useAddTask = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleAddNewTask } = useMutation({
    mutationFn: ({ payload }: Args) => addTask(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'], exact: false });
      toast.success('Task added successfully');
      variables.callback();
    },
    onError: () => {
      toast.error('Error adding task');
    },
  });

  return {
    handleAddNewTask,
    handleAddNewTaskIsLoading: isPending,
  };
};

export default useAddTask;
