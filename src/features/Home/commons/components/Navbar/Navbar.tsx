import { FC } from 'react';
import useNavbar from './hooks/useNavbar';
import LinkedinIcon from '../../../../../icons/LinkedinIcon';
import IconButton from '../../../../../components/IconButton';
import GithubIcon from '../../../../../icons/GithubIcon';
import { SocialMedia } from '../../../../../config/socialMedia';
import OptionDrawer from '../OptionsDrawer/OptionDrawer';
import MenuIcon from '../../../../../icons/MenuIcon';
import ThemeController from '../ThemeController';
// import PortfolioIcon from '../../../../../icons/PortfolioIcon';

const Navbar: FC = () => {
  const {
    isDarkMode,
    taskBoards,
    showOptionDrawer,
    handleThemeSwitch,
    handleGoToTaskBoard,
    handleShowOptionDrawer,
    handleCloseOptionDrawer,
    handleCreateNewTaskBoard,
  } = useNavbar();

  return (
    <>
      <div className="flex items-center w-full p-5 justify-between gap-10">
        <IconButton onClick={handleShowOptionDrawer}>
          <MenuIcon className="stroke-text-custom" />
        </IconButton>

        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-1">
            {/* Proximamente */}
            {/* <IconButton>
          <PortfolioIcon className="stroke-text-custom" />
        </IconButton> */}
            <IconButton
              onClick={() => window.open(SocialMedia.github, '_blank')}
            >
              <GithubIcon className="stroke-text-custom" />
            </IconButton>

            <IconButton
              onClick={() => window.open(SocialMedia.linkedin, '_blank')}
            >
              <LinkedinIcon className="stroke-text-custom" />
            </IconButton>
          </div>

          <ThemeController
            isDarkMode={isDarkMode}
            handleThemeSwitch={handleThemeSwitch}
          />
        </div>
      </div>
      <OptionDrawer
        isOpen={showOptionDrawer}
        taskBoards={taskBoards}
        handleGoToTaskBoard={handleGoToTaskBoard}
        handleCreateNewTaskBoard={handleCreateNewTaskBoard}
        handleCloseDrawer={handleCloseOptionDrawer}
      />
    </>
  );
};

export default Navbar;
