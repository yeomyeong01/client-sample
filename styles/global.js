/* global.js creates a global style setting
 * CS-262 homework02
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    about: {
        padding: 20,
    },
});