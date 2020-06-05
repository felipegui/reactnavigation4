import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Text = styled.Text`
    font-size: 20px;
`;
const Button = styled.TouchableOpacity`
    width: 150px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #CCC;    
`;
const TextButton = styled.Text`
    
`;
const Input = styled.TextInput`
    width: 200px;
    height: 50px;
    border: 1px solid #000;
    padding: 5px;
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 25px;
`;
const TitleLogo = styled.Image`
    width: 30px;
    height: 30px;
`;

const Screen = (props) => {
    const [ name, setName ] = useState('');

    const switchScreen = () => {
        props.navigation.navigate('Login', {name});
        setName('');
    }

    return (
        <Page>
            <Text>Seja bem vindo(a)</Text>
            <Input value={name} onChangeText={(event) => setName(event)}/>
            <Button onPress={switchScreen}>
                <TextButton>Trocar de Tela</TextButton>
            </Button>
        </Page>
    );
}
Screen.navigationOptions = () => {
    return {
        headerTitle: <TitleLogo source={require('../images/logo.png')}/>,
        headerTitleContainerStyle: {
            backgroundColor: 'black',
            justifyContent: 'center'
        }
    }
};
export default Screen;