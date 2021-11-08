/* details.js creates the Details page with the email, ID, and name of the user.
 * CS-262 homework02
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://whispering-eyrie-66411.herokuapp.com/players')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={ globalStyles.container }>
            {/* Display the fields of the received movie object. */}
            <Text style={globalStyles.title}>{ route.params.email }</Text>
            <Text>ID: { route.params.id }</Text>
            <Text>Aka: { route.params.name }</Text>
        </View>
    );
}