import { ButtonHTMLAttributes, FC } from 'react';
import { TailwindUtils } from '../utils/TailwindUtils';
import Spinner from './Spinner';

type Props = {
  /**
   * If `true`, the button will be disabled and then show spinner.
   */
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<Props> = ({
  isLoading,
  children,
  className,
  ...props
}) => {
  const classes = TailwindUtils.cn(
    'flex justify-center items-center p-[10px] rounded-full bg-transparent cursor-pointer h-min transition hover:scale-110',
    className
  );

  return (
    <button className={classes} {...props}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default IconButton;
