import { FC, PropsWithChildren } from 'react';

type Props = {
  isLoading: boolean;
} & PropsWithChildren;

const TitleSkeleton: FC<Props> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className="w-6/8 rounded-lg h-[40px] animate-pulse bg-gray-200" />
  );
};

export default TitleSkeleton;
