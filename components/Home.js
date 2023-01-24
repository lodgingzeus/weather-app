import { View } from 'react-native'
import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { styles } from './styles'
import { Layout, Spinner, Text } from '@ui-kitten/components'
import Forecast from './Forecast'
import * as config from '../constants/config.json'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Feather'

const Home = () => {

  const [ currentCity, setCurrentCity ] = useState('Jalandhar')
  const [ latLon, setLatLon ] = useState({ lat: '', lon: '' })
  const [ available, setAvailable ] = useState(false)
  const [ weather, setWeather ] = useState({ city_name: '', temp: '', temp_min: '', temp_max: '', feels_like: '', description: '' })

  const loadWeather = () => {
    setAvailable(false)
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=${config.appId}`
    fetch(url)
    .then(res => res.ok ? res.json() : console.log('error fetching url1'))
    .then(data => {
        let city
        city = data[0].name
        let lat = data[0].lat
        let lon = data[0].lon
        setLatLon({
          lat: lat,
          lon: lon
        })
        let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.appId}&units=metric`

    fetch(url2)
    .then(res => res.ok ? res.json() : console.log('error fetching url2'))
    .then(data => {
      setWeather({ temp: data.main.temp, temp_min: data.main.temp_min, temp_max: data.main.temp_max, feels_like: data.main.feels_like, description: data.weather[0].main, city_name: data.name })
      setAvailable(true)
    })
    })
  }

  useEffect(() => {
    loadWeather()
  }, [currentCity])

  let weatherIcon

    switch (weather.description) {
        case 'Clouds':
                weatherIcon = <Icon name='cloud-sun' size = {90} />
            break;
        
        case 'Rain':
                weatherIcon = <Icon name='cloud-rain' size={90} light/>
            break;

        case 'Snow':
                weatherIcon = <Icon name='snowflake' size = {90} />
            break;

        default:
                weatherIcon = <Icon2 name='sun' size = {90} />
            break;
    }

  return (
      <Layout style = {styles.container}>
      <SearchBar setCurrentCity = {setCurrentCity}/>
      <View style = {styles.hero}>
        <View>
          <Text category = 'h5'>{weather.city_name}</Text>
          <Text category = 'h1'>{weather.temp}°C</Text>          
        </View>
        <View>
          <Text appearance='hint'>{weatherIcon}</Text>
        </View>
      </View>
      <View style = {styles.maxMin}>
          <Text style = {styles.secondaryTemp} appearance = 'hint'>↑{weather.temp_max}°C </Text>
          <Text style = {styles.secondaryTemp} appearance = 'hint'>↓{weather.temp_min}°C</Text>
      </View>
      <View style = {styles.description}>
        <Text style = {styles.h3} category = 'p1'>{weather.description}</Text>
        <Text style = {styles.h4} category = 'p1' appearance = 'hint'>Feels like {weather.feels_like}°C</Text>
      </View>
      {available && <Forecast latLon = {latLon}/>}
      {!available && (<View style={styles.spinner}><Spinner status='info' size='giant'/></View>)}
      </Layout>
  )
}

export default Home

/* 
const url = `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=025368351ab316689cc73c8b282745a0`
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data[0].name)
      let city = data[0].name
        setLatLon({
          lat: data[0].lat,
          lon: data[0].lon
        })

        let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=025368351ab316689cc73c8b282745a0&units=metric`
        const respone = await fetch(url2)
        const data2 = await respone.json()
        console.log(data2)
        setWeather({ temp: data2.main.temp, temp_min: data2.main.temp_min, temp_max: data2.main.temp_max, feels_like: data2.main.feels_like, description: data2.weather[0].main, city_name: data2.name })
    } catch (error) {
        console.log(error) 
    }
*/