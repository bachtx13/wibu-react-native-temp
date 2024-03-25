import { Layouts } from '../assets/common/constant/layout.constants.ts';

export type ColorPalette =
  | 'transparent'
  | 'primary'
  | 'primaryFocus'
  | 'primaryBorder'
  | 'primaryTextPlaceholder'
  | 'secondary'
  | 'secondaryFocus'
  | 'warning'
  | 'warningFocus'
  | 'success'
  | 'successFocus'
  | 'danger'
  | 'dangerFocus'
  | 'info'
  | 'infoFocus'
  | 'disable'
  | 'disableBorder'
  | 'textLink';
export type ColorsType = Record<ColorPalette, string>;
export type Theme = {
  Colors: ColorsType;
  Layouts: ReturnType<typeof Layouts>;
};
