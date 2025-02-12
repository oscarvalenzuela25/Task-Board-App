import { cva } from 'class-variance-authority';
import { FC } from 'react';

type Props = {
  variant?:
    | 'base'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
};

const SpinnerVariant = cva('loading loading-spinner loading-sm', {
  variants: {
    variant: {
      base: '',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      neutral: 'text-neutral',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

const Spinner: FC<Props> = ({ variant = 'base' }) => {
  const classes = SpinnerVariant({ variant });
  return <span className={classes}></span>;
};

export default Spinner;
