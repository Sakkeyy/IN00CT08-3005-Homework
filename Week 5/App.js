import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Map from './screens/Map'
import Constants from 'expo-constants'
import * as Location from 'expo-location'
import MainAppbar from './components/MainAppBar'
import { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper'

//TÄMÄ KOODI ON BUGINEN PASKA KOSKA IPHONE
const settings = {
  backgroundColor: '#00a484'
}

const icons = {
  location_not_known: 'crosshairs',
  location_searching: 'crosshairs-question',
  location_foud: 'crosshairs-gps'
}



export default function App() {
  const [icon, setIcon] = useState(icons.location_not_known)
  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
/*
  useEffect(() => {
    (async()=> {
      setIcon(icons.location_searching)
    let {status} = await Location.requestForegroundPermissionsAsync()
    try{
      if (status !== 'granted') {
        console.log('Geolocation failed')
        return
      }
      const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
      setLocation({...Location,"latitude": position.coords.latitude, "longitude": position.coords.longitude})
      setIcon(icons.location_foud)
    } 
    catch (error) {
      console.log('Error getting user position', error)
    }
  })()
  },[])
*/

  const handleGetUserPosition = async () => {
    setIcon(icons.location_searching)
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Geolocation failed');
      return;
    }
    const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });
    setIcon(icons.location_foud)
  };

  return (
    <PaperProvider>
      <MainAppbar
      title= "Map"
      backgroundColor= {settings.backgroundColor}
      icon={icon}
      onGetUserPosition={handleGetUserPosition}
      />
      <SafeAreaView>
        <Map location = {location}/>
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0
  },
})
