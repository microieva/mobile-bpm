import React, { Component } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';

import styles from '../../StyleSheet';


export default class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            lastTapSeconds: 0,
            bpm: 0,
            beats: [],
            average: 0,
            count: 0
        }
        
    }

    countBpm() {
        const { lastTapSeconds, bpm, beats, average, count } = this.state;

        const tapSeconds = new Date().getTime();

        this.bpm = ((1 / ((tapSeconds - this.lastTapSeconds) / 1000)) * 60);
        this.lastTapSeconds = tapSeconds;
        this.beats = beats.push(Math.floor(bpm));
        /*this.average *= count;
        this.average += Math.floor(bpm);
        this.count++;
        this.average /= count;*/

        this.setState({
                bpm: Math.floor(bpm),
            });

        /*this.setState((prevState)=> ({
            clicks: prevState.clicks + 1,
            //count bpm from number of clicks
            bpm: ((1 / ((tapSeconds - this.lastTapSeconds) / 1000)) * 60),
            lastTapSeconds: tapSeconds,
            beats: this.beats.push(Math.floor(bpm))
        }));*/

        


        /*if (this.state.clicks >= 4) {
                bpmCount: (clicks/60)*1000
        } else {
            Alert.alert(
                "Need at least 4 clicks", null,
                {text: "OK"},
                {cancelable: false}
            );
            this.setState({
                clicks: 0
            });
        }*/
    }

    handleBpmClick() {
        //sends the BPM result to the slider
    }

    reset() {
        this.setState({clicks: 0});
    }

    render() {

        return (
            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.countBpm.bind(this)}>
                        <Text style={styles.buttonText}>
                            Count BPM
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.reset.bind(this)}>
                        <Text style={styles.buttonText}>
                            {String(this.state.bpm)} BPM
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}