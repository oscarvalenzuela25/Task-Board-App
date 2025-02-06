import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const DoneCircleIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      className={className}
      fill="none"
    >
      <circle
        cx="10"
        cy="9.99998"
        r="6.66667"
        fill="#F8FAFC"
        fillOpacity="0.25"
      />
      <path
        d="M7.08333 9.16667L8.87623 10.9596C9.26675 11.3501 9.89992 11.3501 10.2904 10.9596L16.25 5"
        stroke="#F8FAFC"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DoneCircleIcon;
