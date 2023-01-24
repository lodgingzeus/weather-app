import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import moment from 'moment/moment'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/Feather'

const weather = ( { data: { dt_txt, main, weather}, } ) => {

    let weatherIcon

    switch (weather[0].main) {
        case 'Clouds':
                weatherIcon = <Icon name='cloud-sun' size = {18} />
            break;
        
        case 'Rain':
                weatherIcon = <Icon name='cloud-rain' size={18} light/>
            break;

        case 'Snow':
                weatherIcon = <Icon name='snowflake' size = {18} />
            break;

        default:
                weatherIcon = <Icon2 name='sun' size = {18} />
            break;
    }
    
    const formattedDate = moment(dt_txt).format(`hh A`)
  
    return (
    <Layout style = {styles.container}>
      <Text>{formattedDate}</Text>
      <Text appearance='hint'>{weatherIcon}</Text>
      <Text>{main.temp}° C</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

export default weather