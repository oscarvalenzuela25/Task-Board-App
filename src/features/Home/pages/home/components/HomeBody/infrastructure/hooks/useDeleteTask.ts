import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import deleteTask from '../service/deleteTask';

type Args = {
  id: number;
  callback: () => void;
};

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleDeleteTask } = useMutation({
    mutationFn: ({ id }: Args) => deleteTask(id),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'], exact: false });
      toast.success('Task deleted successfully');
      variables.callback();
    },
    onError: () => {
      toast.error('Error deleting task');
    },
  });

  return {
    handleDeleteTask,
    handleDeleteTaskIsLoading: isPending,
  };
};

export default useDeleteTask;
