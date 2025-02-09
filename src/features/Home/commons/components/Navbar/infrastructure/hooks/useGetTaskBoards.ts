import { useQuery } from '@tanstack/react-query';
import getTaskBoards from '../service/getTaskBoards';

const useGetTaskBoards = () => {
  const {
    data = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ['getTaskBoards'],
    queryFn: () => getTaskBoards(),
  });

  return {
    taskBoards: data,
    getTaskBoardsIsFetching: isFetching,
    getTaskBoardsIsLoading: isLoading,
  };
};

export default useGetTaskBoards;
