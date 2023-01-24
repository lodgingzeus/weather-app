import { Input } from "@ui-kitten/components"
import { useState } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome5'

const SearchBar = ( { setCurrentCity } ) => {

  let searchIcon = <Icon name = 'search-location' size = {25} color = "#8F9BB3" />
  const [ text, setText ] = useState("")

  const handleChange = (e) => {
    setText(e)
  }

  const handleSubmit = () => {
    setCurrentCity(text)
  }

  return (
    <View style = {styles.searchContainer}>
      <Input value={text} onChangeText={handleChange} onSubmitEditing = {handleSubmit} style = {styles.searchBox} placeholder = "Search for a city" accessoryRight={searchIcon} />
    </View>
  )
}

export default SearchBar