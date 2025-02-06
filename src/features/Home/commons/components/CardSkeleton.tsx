import { FC, PropsWithChildren } from 'react';

type Props = {
  isLoading: boolean;
} & PropsWithChildren;

const CardSkeleton: FC<Props> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  }
  const skeletonArray = Array.from({ length: 3 });

  return (
    <div className="flex flex-col w-full gap-5">
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          className="flex w-full p-4 rounded-2xl justify-between gap-5 cursor-pointer animate-pulse bg-gray-200"
        >
          <div className="flex items-center gap-5 w-full">
            <div className="rounded-xl p-3 w-[46px] h-[48px] bg-gray-300" />
            <div className="rounded-lg w-5/8 h-[32px] bg-gray-300" />
          </div>
          <div className="rounded-xl p-3 w-[46px] h-[48px] bg-gray-300" />
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
