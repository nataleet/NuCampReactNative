import React from 'react';
import Main from './components/MainComponent';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Main />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
}) 