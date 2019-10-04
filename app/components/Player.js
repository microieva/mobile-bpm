import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Slider } from 'react-native';
import { Audio } from 'expo';
import { StackNavigator } from 'react-navigation';

import styles from '../../StyleSheet';
import click1 from '../../assets/click1.mp3';
import click2 from '../../assets/click2.mp3';

export default class Player extends Component {

    constructor(props) {
        super(props);

        this.state= {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        };

        const click1 = new Expo.Audio.Sound();
        const click2 = new Expo.Audio.Sound();

        this.playClick = this.playClick.bind(this);
    };

    async componentWillMount() {

        try {
            await Expo.Audio.setIsEnabledAsync(true);
        } catch(error) {
            console.log('Error: ', error);
        }
    };

    handleBpmChange(bpm) {
        
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60/this.state.bpm)*1000);
            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({bpm});
        }    
    };

    playClick = async() => {
        const { count, beatsPerMeasure } = this.state;
        
        try {
            if (count % beatsPerMeasure === 0) {
                await click2.loadAsync(require('../../assets/click2.mp3'));
                await click2.playAsync();
            } else {
                await click1.loadAsync(require('../../assets/click1.mp3'));
                await click1.playAsync();
            }

            this.setState(state => ({
                count: (this.state.count + 1) % this.state.beatsPerMeasure
            }));
        } catch (error) {
            console.log(error);
        }
        
    };

    startStop() {
        if (this.state.playing) {
        // Stopping the timer
            clearInterval(this.timer);
            this.setState({
                playing: false
            });

        } else {
        // Starting the timer with the current BPM
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            );
            this.setState({
                count: 0,
                playing: true
            // Play click after setState finishes
            },
                this.playClick
            );
        }
    };

    
    render() {
        const {playing, bpm} = this.state;

        return (
            <View >
                <View style={styles.roundButton}>
                    <Text style={styles.roundButtonText}>{String(bpm)} BPM</Text>
                </View>
                <View>
                    <Slider style={styles.slider} 
                        type="range" 
                        minimumValue={80} 
                        maximumValue={180} 
                        step={1}
                        value={bpm}
                        onValueChange={this.handleBpmChange.bind(this)}/>
                </View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={this.startStop.bind(this)}>
                        <Text style={styles.buttonText}>
                            {playing ? 'Stop' : 'Start'}
                        </Text>
                </TouchableOpacity>

            </View>
        );
    }    
}


