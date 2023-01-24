import { useEffect, useState } from 'react'
import { Layout } from '@ui-kitten/components'
import * as config from '../constants/config.json'
import Weather from './Weather'

const Forecast = ( { latLon: { lat, lon} }) => {
    const [ forecaseAvailable, setForecastAvailable ] = useState(false)
    const [ forecast, setForecast ] = useState({})

    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&units=metric&appid=${config.appId}`)
      .then(res => res.json())
      .then(data => {
        setForecast(data.list)
        setForecastAvailable(true)
    })
    }, [lat, lon])

  return (
    <Layout>
      {forecaseAvailable && (
        forecast.map(temp => (
          <Weather key={temp.dt} data = {temp}/>
        ))
      )}
    </Layout>
  )
}

export default Forecast