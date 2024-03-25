import * as React from 'react';
import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useToast } from '../../hooks/useToast.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.types.ts';
import { IUserState } from '../../store/user/user.types.ts';
import { useCreateStyle } from '../../theme/hooks/useCreateStyle.ts';
import { styleCreator } from './Home.styles.ts';
import { WibuButton } from '../../ui/WibuButton/WibuButton.tsx';
import { EButtonAppearance } from '../../ui/WibuButton/WibuButton.types.ts';
import { clearUser } from '../../store/user/user.slice.ts';
import { updateToken } from '../../store/auth/auth.slice.ts';

const Home = () => {
  const styles = useCreateStyle(styleCreator, {});
  const dispatch = useDispatch();
  const toast = useToast();
  const { info } = useSelector<RootState, IUserState>(state => state.user);
  useEffect(() => {
    toast.success({
      title: 'Welcome back',
      content: info.email,
    });
  }, []);
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(updateToken(undefined));
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.logoutButton]}>
        <WibuButton
          onPress={handleLogout}
          appearance={EButtonAppearance.DANGER}
        >
          Logout
        </WibuButton>
      </View>
      <View style={[styles.welcomeTextContainer]}>
        <Text style={[styles.welcomeText]}>
          {'Welcome, Mr.Thai and Ms.Chi\nto my interview'}
        </Text>

        <Image
          style={[styles.welcomeImage]}
          src={
            'https://i.pinimg.com/originals/47/97/b0/4797b05c719a01b177114e93c177d960.gif'
          }
        />
      </View>
    </View>
  );
};

export { Home };
