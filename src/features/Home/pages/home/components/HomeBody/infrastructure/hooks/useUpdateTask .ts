import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateTask } from '../../../../../../../../API/domain/models/Tasks';
import { toast } from 'sonner';
import updateTask from '../service/updateTask';

type Args = {
  id: number;
  payload: UpdateTask;
  callback: () => void;
};

const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleUpdateTask } = useMutation({
    mutationFn: ({ id, payload }: Args) => updateTask(id, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'], exact: false });
      toast.success('Task updated successfully');
      variables.callback();
    },
    onError: () => {
      toast.error('Error updating task');
    },
  });

  return {
    handleUpdateTask,
    handleUpdateTaskIsLoading: isPending,
  };
};

export default useUpdateTask;
