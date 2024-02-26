import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import Styles from '../Styles';
import {useTheme} from '../context/useTheme'


export default function Home() {
  const {isDarkMode} = useTheme()
    return (
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    
  );
}
