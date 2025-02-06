import { FC } from 'react';
import logo from '../../../../../../assets/logo.svg';
import IconButton from '../../../../../../components/IconButton';
import SaveIcon from '../../../../../../icons/SaveIcon';
import UpdateIcon from '../../../../../../icons/UpdateIcon';
import useHomeTitle from './hooks/useHomeTitle';
import { cva } from 'class-variance-authority';
import TitleSkeleton from '../../../../commons/components/TitleSkeleton';

const inputVariants = cva(
  'text-[40px] border-[0px] border-b-2 outline-none leading-none',
  {
    variants: {
      error: {
        true: 'border-light-pink-custom focus:border-red-custom',
        false: 'border-black-translucent-custom focus:border-blue-custom',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

const HomeTitle: FC = () => {
  const {
    taskBoard,
    updateMode,
    newTitle,
    validations,
    handleToggleUpdateMode,
    handleChangeNewTitle,
    handleUpdateTitle,
    handleKeyDown,
  } = useHomeTitle();

  const inputClasses = inputVariants({ error: validations.isError });

  return (
    <div className="flex gap-3 w-full text-text-custom">
      <img src={logo} alt="logo" className="h-min transition hover:rotate-90" />

      <div className="flex flex-col w-full gap-3 overflow-hidden">
        <TitleSkeleton isLoading={validations.requestLoading}>
          {updateMode ? (
            <input
              type="text"
              value={newTitle}
              onChange={e => handleChangeNewTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className={inputClasses}
              disabled={validations.requestLoading}
            />
          ) : (
            <h1 className="text-[40px] leading-none ">{taskBoard.title}</h1>
          )}
        </TitleSkeleton>
        <p className="animate-fade-up animate-once">Tasks to keep organised</p>
      </div>

      <div className="flex items-center gap-3 h-min">
        {updateMode && (
          <IconButton
            onClick={handleUpdateTitle}
            disabled={validations.isError || validations.requestLoading}
            isLoading={validations.requestLoading}
          >
            <SaveIcon />
          </IconButton>
        )}
        <IconButton
          onClick={() => {
            handleToggleUpdateMode();
            handleChangeNewTitle(taskBoard.title);
          }}
          disabled={validations.requestLoading}
        >
          <UpdateIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeTitle;
