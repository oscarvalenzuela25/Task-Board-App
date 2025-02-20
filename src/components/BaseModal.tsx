import { FC, PropsWithChildren, createContext, useContext } from 'react';
import IconButton from './IconButton';
import CloseModalCircleIcon from '../icons/CloseModalCircleIcon ';
import { TailwindUtils } from '../utils/TailwindUtils';

type ContextProps = {
  isOpen: boolean;
  validations: Record<string, boolean>;
  handleCloseModal: VoidFunction;
};

const Context = createContext<ContextProps>({
  isOpen: false,
  validations: {},
  handleCloseModal: () => {},
});

type PropsBase = {
  isOpen: boolean;
  validations: Record<string, boolean>;
  dialogClassName?: string;
  containerClassName?: string;
  handleCloseModal: VoidFunction;
} & PropsWithChildren;

type PropsTitle = {
  containerClassName?: string;
  titleClassName?: string;
} & PropsWithChildren;

type PropsBody = {
  className?: string;
} & PropsWithChildren;

type PropsFooter = {
  className?: string;
} & PropsWithChildren;

type Props = FC<PropsBase> & {
  Title: FC<PropsTitle>;
  Body: FC<PropsBody>;
  Footer: FC<PropsFooter>;
};

const Title: FC<PropsTitle> = ({
  containerClassName,
  titleClassName,
  children,
}) => {
  const { validations, handleCloseModal } = useContext(Context);
  const containerClasses = TailwindUtils.cn(
    'flex justify-between items-center',
    containerClassName
  );

  const titleClasses = TailwindUtils.cn(
    'text-[20px] font-medium',
    titleClassName
  );
  return (
    <div className={containerClasses}>
      <p className={titleClasses}>{children}</p>
      <IconButton
        className={'btn btn-ghost'}
        onClick={handleCloseModal}
        disabled={validations.mutationIsLoading}
      >
        <CloseModalCircleIcon />
      </IconButton>
    </div>
  );
};

const Body: FC<PropsBody> = ({ children, className }) => {
  const classes = TailwindUtils.cn('flex flex-col gap-5 mt-4', className);
  return <div className={classes}>{children}</div>;
};

const Footer: FC<PropsFooter> = ({ children, className }) => {
  const classes = TailwindUtils.cn('flex justify-end gap-4 mt-20', className);
  return <div className={classes}>{children}</div>;
};

const BaseModal: Props = ({
  isOpen,
  validations,
  children,
  dialogClassName,
  containerClassName,
  handleCloseModal,
}) => {
  const dialogClasses = TailwindUtils.cn(
    'modal bg-black-translucent-custom pl-5 pr-10 md:flex md:justify-end md:pr-8 2xl:pr-32 overflow-y-scroll',
    dialogClassName
  );

  const containerClasses = TailwindUtils.cn(
    'rounded-xl px-6 py-4 bg-white-custom md:w-[565px] animate-fade-right animate-once text-text-custom',
    containerClassName
  );
  return (
    <dialog className={dialogClasses} open={isOpen}>
      <div className={containerClasses}>
        <Context.Provider
          value={{
            isOpen,
            validations,
            handleCloseModal,
          }}
        >
          {children}
        </Context.Provider>
      </div>
    </dialog>
  );
};

BaseModal.Title = Title;
BaseModal.Body = Body;
BaseModal.Footer = Footer;

export default BaseModal;
