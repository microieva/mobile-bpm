import React, { Component } from 'react';
import { Alert, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import styles from '../../StyleSheet';


export default class Comparator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bpm1: "",
            bpm2: "",
            compResult: 0,
            inputs: false,
        };
    }

    static navigationOptions = {
        header: null,
    };

    compareCalculation(){
        const {bpm1, bpm2, inputs, compResult} = this.state;

        this.setState(state =>({
            inputs: true,
            compResult: parseFloat(100-((Number(bpm1)*100)/ Number(bpm2))).toFixed(2)
        }));
        // HOW TO DISPLAY AS POSITIVE ?
        if (compResult < 0) {

        }
    }
    // HOW TO RESET ?????
    reset = () => {
        this.setState(state =>({
            bpm1: "",
            bpm2: "",
            compResult: 0,
            inputs: false,
        }));
    }

    render() {
        const {bpm1, bpm2, inputs, compResult} = this.state;

        return (

            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}>
                                    
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>

                        <TouchableOpacity 
                            style={styles.roundButton}
                            onPress={() => this.props.navigation.navigate("Home", {})}>
                            <Text style={styles.roundButtonText}> Home </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <TextInput 
                                placeholder="Enter BPM"
                                style={styles.buttonText}
                                keyboardType={'numeric'}
                                onChangeText={(bpm1) => this.setState({bpm1})}
                                value={bpm1}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={this.compareCalculation.bind(this) }>
                            <Text style={styles.buttonText}>
                                {inputs ? compResult +" %" : 'Compare BPM'}
                            </Text>
                        </TouchableOpacity> 

                        <TouchableOpacity style={styles.button}>      
                            <TextInput 
                                placeholder="Enter BPM"
                                style={styles.buttonText}
                                keyboardType={'numeric'}
                                onChangeText={(bpm2) => this.setState({bpm2})}
                                value={bpm2}/>
                        </TouchableOpacity> 

                        <TouchableOpacity 
                            style={styles.roundButton}
                            onPress={this.reset.bind(this)}>
                            <Text style={styles.roundButtonText}> Reset </Text>
                        </TouchableOpacity>      
                    </View>
                </TouchableWithoutFeedback>   
            </KeyboardAwareScrollView>   
        )
    }
    
}

