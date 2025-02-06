import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const AddCircleIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      className={className}
      fill="none"
    >
      <circle cx="12" cy="12" r="9" fill="#F8FAFC" fillOpacity="0.25" />
      <path
        d="M12 8L12 16"
        stroke="#F8FAFC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 12L8 12"
        stroke="#F8FAFC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddCircleIcon;
