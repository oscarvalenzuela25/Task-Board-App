import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const AddIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      className={className}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
  );
};

export default AddIcon;
