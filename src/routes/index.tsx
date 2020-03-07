import * as React from 'react';

import Home from '../containers/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Films from '../containers/films';

const Stack = createStackNavigator();

export enum ROUTES_NAMES {

    Home = "Home",
    Films = "Films"
}

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES_NAMES.Home}>
                <Stack.Screen options={{
                    headerTitle: 'Star Wars',
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: 'black'
                    },
                }} name={ROUTES_NAMES.Home} component={Home} />
                <Stack.Screen options={{
                    headerTitle: 'Detail of Movie',
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: 'black',
                    }
                }} name={ROUTES_NAMES.Films} component={Films} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;