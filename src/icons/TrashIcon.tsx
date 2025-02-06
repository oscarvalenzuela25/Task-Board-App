import { FC } from 'react';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

const TrashIcon: FC<Props> = ({ width, height, className }) => {
  return (
    <svg
      width={width || 20}
      height={height || 20}
      className={className}
      fill="none"
    >
      <path
        d="M8.33333 12.5L8.33333 10"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.6667 12.5L11.6667 10"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2.5 5.83331H17.5V5.83331C17.0353 5.83331 16.803 5.83331 16.6098 5.87174C15.8164 6.02956 15.1962 6.64975 15.0384 7.44313C15 7.63633 15 7.86866 15 8.33331V12.6666C15 14.5523 15 15.4951 14.4142 16.0809C13.8284 16.6666 12.8856 16.6666 11 16.6666H9C7.11438 16.6666 6.17157 16.6666 5.58579 16.0809C5 15.4951 5 14.5523 5 12.6666V8.33331C5 7.86866 5 7.63633 4.96157 7.44313C4.80376 6.64975 4.18356 6.02956 3.39018 5.87174C3.19698 5.83331 2.96466 5.83331 2.5 5.83331V5.83331Z"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.39013 2.80883C8.48509 2.72023 8.69433 2.64194 8.9854 2.5861C9.27648 2.53027 9.63311 2.5 10 2.5C10.3669 2.5 10.7235 2.53027 11.0146 2.5861C11.3057 2.64194 11.5149 2.72023 11.6099 2.80883"
        stroke="#FEF7EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TrashIcon;
