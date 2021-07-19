import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components/native';
import { Image, Input, Button } from '../components';
import { images } from '../utils/images';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { login } from '../utils/firebase';
import { ProgressContext, UserContext } from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;


const Login = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const { spinner } = useContext(ProgressContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        setDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEmailChange = email => {
        const changedEmail = removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : '이메일 형식을 확인해주세요.'
        );
    };



    const _handlePasswordChange = password => {
        setPassword(removeWhitespace(password));
    };


    const _handleLoginButtonPress = async () => {
        try {
            spinner.start();
            const user = await login({ email, password });
            dispatch(user);
        } catch (e) {
            Alert.alert('Login Error', e.message);
        } finally {
            spinner.stop();
        }
    };
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraScrollHeight={20}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container insets={insets}>
                    <Image url={images.Tagging} imageStyle={{ width: 1400, height:90, resizeMode:"contain" }} />
                    <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={_handleEmailChange}
                        onSubmitEditing={() => passwordRef.current.focus()}
                        placeholder="이메일을 입력해 주세요."
                        returnKeyType="next"
                    />
                    <Input
                        ref={passwordRef}
                        label="Password"
                        value={password}
                        onChangeText={_handlePasswordChange}
                        onSubmitEditing={_handleLoginButtonPress}
                        placeholder="비밀번호를 입력해 주세요."
                        returnKeyType="done"
                        isPassword
                    />
                    <ErrorText>{errorMessage}</ErrorText>
                    <Button
                        title="로그인"
                        onPress={_handleLoginButtonPress}
                        disable={disabled} />
                    <Button
                        title="회원가입"
                        onPress={() => navigation.navigate('Signup')}
                        isFilled={false}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default Login;
