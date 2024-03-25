import { useNavigation } from '@react-navigation/native';
import { ApplicationStackProps } from './application-screens.types.ts';

const useApplicationNavigation = () => {
  return useNavigation<ApplicationStackProps>();
};

export { useApplicationNavigation };
