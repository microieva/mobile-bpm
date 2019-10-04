import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Player from '../components/Player';
import Counter from '../components/Counter';
import styles from '../../StyleSheet';


class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <Player />
                <Counter />
                <TouchableOpacity style= {styles.button}
                    onPress={() => this.props.navigation.navigate("Comparator", 
                        {})}>
                    <Text style={styles.buttonText}> Compare BPM </Text>
                </TouchableOpacity>
            </View>
        )
    }
};

export default HomeScreen;