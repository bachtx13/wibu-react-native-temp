import { StyleSheet } from 'react-native';

export const Layouts = () =>
  StyleSheet.create({
    fullSize: {
      width: '100%',
      height: '100%',
    },
    dFlex: {
      display: 'flex',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    justifyContentStart: {
      justifyContent: 'flex-start',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    dFlexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textCenter: {
      textAlign: 'center',
    },
    textStart: {
      textAlign: 'left',
    },
    textEnd: {
      textAlign: 'right',
    },
  });
