import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateTaskBoard from '../service/updateTaskBoard';
import { toast } from 'sonner';

export type Payload = {
  title: string;
};

type Args = {
  uuid: string;
  payload: Payload;
  callback: () => void;
};

const useUpdateTaskBoard = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: handleUpdateTaskBoard } = useMutation({
    mutationFn: ({ uuid, payload }: Args) => updateTaskBoard(uuid, payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['getTaskBoard'],
        exact: false,
      });
      variables.callback();
      toast.success('Task title updated successfully');
    },
    onError: () => {
      toast.error('Error updating task title');
    },
  });

  return {
    handleUpdateTaskBoardIsLoading: isPending,
    handleUpdateTaskBoard,
  };
};

export default useUpdateTaskBoard;
