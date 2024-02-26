import { View, Text } from 'react-native';
import Styles from '../Styles';
import { useTheme } from '../context/useTheme';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

export default function Settings() {
    const { isDarkMode } = useTheme()
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <ThemeSwitchButton/>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>Settings</Text>
    </View>
  );
}