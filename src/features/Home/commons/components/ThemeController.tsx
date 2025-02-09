import { FC } from 'react';
import SunIcon from '../../../../icons/SunIcon';
import MoonIcon from '../../../../icons/MoonIcon';

type Props = {
  handleThemeSwitch: () => void;
  isDarkMode: boolean;
};

const ThemeController: FC<Props> = ({ handleThemeSwitch, isDarkMode }) => {
  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        onChange={handleThemeSwitch}
        checked={isDarkMode}
      />

      <SunIcon className="swap-off h-10 w-10 fill-current" />

      <MoonIcon className="swap-on h-10 w-10 fill-current" />
    </label>
  );
};

export default ThemeController;
