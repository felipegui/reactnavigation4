import React from 'react';
import styled from 'styled-components';

const Page = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Text = styled.Text`
    font-size: 20px;
`;

const Screen = (props) => {
    return (
        <Page>
            <Text>Tela de Login</Text>
            <Text>{props.navigation.state.params.name}</Text>
        </Page>
    );
}
Screen.navigationOptions = () => {
    return {
        title: 'Login'
    }
};
export default Screen;