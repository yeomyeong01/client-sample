/* about.js creates the About page
 * CS-262 homework02
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function AboutScreen() {
    return (
        <View style={globalStyles.about}>
            <Text>This application accesses information on monopoly players.</Text>
        </View>
    )
}