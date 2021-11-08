/* header.js fixes a button to the app header bar
 * CS-262 lab05
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Header({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text style={globalStyles.about}>?</Text>
            </TouchableOpacity>
        </View>
    );
};