import { useNavigation } from '@react-navigation/native';
import { ApplicationStackNavigationProps } from './screens.types.ts';

const useApplicationNavigation = () => {
  return useNavigation<ApplicationStackNavigationProps>();
};

export { useApplicationNavigation };
