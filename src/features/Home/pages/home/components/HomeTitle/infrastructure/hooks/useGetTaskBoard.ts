import { useQuery } from '@tanstack/react-query';
import getTaskBoard from '../service/getTaskBoard';

const defaultData = { uuid: '', title: '' };

const useGetTaskBoard = (uuid: string) => {
  const {
    data = defaultData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['getTaskBoard', uuid],
    queryFn: () => getTaskBoard(uuid),
    retry: false,
    enabled: !!uuid,
    refetchOnMount: false,
    staleTime: 0,
  });

  return {
    taskBoard: data,
    fetchTaskBoardIsLoading: isLoading,
    fetchTaskBoardIsFetching: isFetching,
  };
};

export default useGetTaskBoard;
