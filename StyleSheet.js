import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    slider: {
        marginBottom: 20,
    },

    button: {
        marginBottom: 10,
        width: 220,
        height: 80,
        borderWidth: 3,
        borderColor: 'rgb(66,133,244)',
        borderRadius: 10,
        backgroundColor: 'rgb(200,200,200)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    roundButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor:'rgb(200,200,200)',
        borderWidth: 3,
        borderColor: 'rgb(66,133,244)',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        alignSelf: 'center'
    },

    text: {
        
        fontSize: 20,
        fontWeight: 'bold'
    },

    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgb(66,133,244)'
    },

    roundButtonText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'rgb(66,133,244)'
    }

});

export default styles;