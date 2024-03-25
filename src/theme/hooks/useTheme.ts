import { ColorsType, Theme } from '../../types/theme.types.ts';
import { Palette } from '../../assets/common/constant/color.constants.ts';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider/ThemeProvider.tsx';
import { Layouts } from '../../assets/common/constant/layout.constants.ts';

export const useTheme = (): Theme => {
  const { isDarkMode } = useContext(ThemeContext);
  const Colors: ColorsType = {
    transparent: Palette.transparent,
    primary: isDarkMode ? Palette.black : Palette.white,
    secondary: isDarkMode ? Palette.white : Palette.black,
    primaryFocus: isDarkMode ? Palette.gray3 : Palette.gray1,
    primaryTextPlaceholder: Palette.gray3,
    secondaryFocus: isDarkMode ? Palette.gray1 : Palette.gray3,
    warning: Palette.orange1,
    warningFocus: Palette.orange2,
    danger: Palette.red2,
    dangerFocus: Palette.red1,
    info: Palette.blue4,
    infoFocus: Palette.blue2,
    success: Palette.green2,
    successFocus: Palette.green3,
    primaryBorder: Palette.gray3,
    disable: Palette.gray4,
    disableBorder: Palette.gray3,
    textLink: Palette.blue4,
  };
  return {
    Colors: Colors,
    Layouts: Layouts(),
  };
};
