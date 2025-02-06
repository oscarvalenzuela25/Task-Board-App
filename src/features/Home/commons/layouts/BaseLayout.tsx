import { FC, PropsWithChildren } from 'react';
import { TailwindUtils } from '../../../../utils/TailwindUtils';
import Navbar from '../components/Navbar';

type Props = PropsWithChildren & {
  className?: string;
};

const BaseLayout: FC<Props> = ({ children, className }) => {
  const classes = TailwindUtils.cn(
    'flex flex-col items-center m-[0px] p-[0px] min-h-screen bg-white-custom overflow-hidden',
    className
  );
  return (
    <div className={classes}>
      <Navbar />
      {children}
    </div>
  );
};

export default BaseLayout;
