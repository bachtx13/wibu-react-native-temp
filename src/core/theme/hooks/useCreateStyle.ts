import { Theme } from '../../types/theme.types.ts';
import { useTheme } from './useTheme.ts';

export type Styles = {
  [key: string]: any;
};

export type StyleCreator<T = Styles, P = {}, E = {}> = (
  theme: Theme,
  props: P,
  extraProps?: E,
) => T;

export const useCreateStyle = <T, P = {}, E = {}>(
  styleCreator: StyleCreator<T, P, E>,
  props: P,
  extraProps?: E,
) => {
  const theme = useTheme();
  return styleCreator(theme, props, extraProps);
};
