import { useQuery } from '@tanstack/react-query';
import getTasks from '../service/getTasks';

const useGetTasks = (taskBoardUuid: string) => {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['getTasks', taskBoardUuid],
    queryFn: () => getTasks(taskBoardUuid),
    retry: false,
    enabled: !!taskBoardUuid,
    refetchOnMount: false,
    staleTime: 0,
  });

  return {
    tasks: data,
    getTasksIsLoading: isLoading,
    getTasksIsFetching: isFetching,
  };
};

export default useGetTasks;
