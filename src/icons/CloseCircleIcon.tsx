import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const CloseCircleIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      className={className}
      fill="none"
    >
      <circle cx="10" cy="10" r="7.5" fill="#F8FAFC" fillOpacity="0.25" />
      <path
        d="M7.5 7.5L12.5 12.5"
        stroke="#F8FAFC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12.5 7.5L7.5 12.5"
        stroke="#F8FAFC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseCircleIcon;
