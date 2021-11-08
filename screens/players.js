/* players.js displays a list of players' email address.
 * CS-262 homework02
 * Name: Yeo Myeong Yoon
 * Date: October 15, 2021
*/

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function PlayersScreen ({ navigation }){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://whispering-eyrie-66411.herokuapp.com/players')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return(
        <View style={ globalStyles.container }>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                            <Text style={globalStyles.title}>{ item.email }</Text>
                        </TouchableOpacity>
                    )}/>
            )}
        </View>
    );
};