import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const DoneIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      className={className}
      fill="none"
    >
      <path
        d="M4.16667 11.6667L6.73309 13.5915C7.16178 13.913 7.76772 13.8395 8.10705 13.4247L15 5"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DoneIcon;
