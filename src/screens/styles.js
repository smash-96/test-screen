import {StyleSheet} from 'react-native';

const dynamicStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255,255,255)',
    },
    ellipseView: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    textInput: {
      width: 300,
      height: 49,
      opacity: 1,
      marginBottom: 40,
      paddingLeft: 10,
      backgroundColor: 'rgb(196, 196, 196)',
    },
    btnView: {
      width: 120,
      height: 35,
      opacity: 1,
      backgroundColor: 'rgb(196, 196, 196)',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 40,
    },
    errorText: {
      fontSize: 18,
      color: 'red',
      width: 300,
      height: 50,
    },
  });
};
export default dynamicStyles;
