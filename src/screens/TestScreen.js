import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import dynamicStyles from './styles';
import {useDispatch} from 'react-redux';
import {setUserEmail, setUserPassword} from '../redux/slices/userAuthSice';
import {login} from '../api/auth/auth';
import Ellipse from '../components/Ellipse';
const TestScreen = () => {
  const styles = dynamicStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const save = async () => {
    setError('');
    if (!email || !password) {
      setError('Error: Email or password cannot be empty');
      return;
    }
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));

    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);

    login(params)
      .then(response => {
        if (response.toString().includes('Error')) {
          setError(response.toString());
        }
      })
      .catch(err => {
        setError('Error: Something went wrong. Try again!');
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.ellipseView}>
        <Ellipse />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={'Email'}
          placeholderTextColor="black"
          type="email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder={'Password'}
          placeholderTextColor="black"
          type="password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity style={styles.btnView} onPress={save}>
          <Text>Save</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    </View>
  );
};

export default TestScreen;
