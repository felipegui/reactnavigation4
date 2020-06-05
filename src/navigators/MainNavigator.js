import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';

const MainNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome
    },
    Login: {
        screen: Login
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'pink'
        },
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTintColor: 'yellow',
        headerTitleContainerStyle: {
            backgroundColor: 'black'
        },
        headerLeftContainerStyle: {
            backgroundColor: 'black'
        },
        headerRightContainerStyle: {
            backgroundColor: 'black'
        }
    }
});
export default MainNavigator;