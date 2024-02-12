import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

export default function Map() {

  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  

  useEffect(() => {
    (async()=> {
    let {status} = await Location.requestForegroundPermissionsAsync()
    try{
      if (status !== 'granted') {
        console.log('Geolocation failed')
        return
      }
      const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
      setLocation({...Location,"latitude": position.coords.latitude, "longitude": position.coords.longitude})
    } 
    catch (error) {
      console.log('Error getting user position', error)
    }
  })()
  },[])

  

  return (
    <>
    <MapView 
    style={styles.map}
    region={location}
    />
  </>
  )
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
});
