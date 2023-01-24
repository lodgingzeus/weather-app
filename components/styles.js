import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        borderColor: '#000',
        height: '90%',
        width: '100%',
      },
  
      text: {
        color: 'white',
        fontSize: 32,
      },
  
      mainTemp: {
        color: 'white',
        fontSize: 64
      },
  
      maxMin: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 15
      },

      hero: {
        padding: 10,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
      },

      description: {
        marginTop: 10,
        padding: 10,
        marginBottom: 15,
      },

      searchBox: {
        width: 335,
      },

      searchContainer: {
        justifyContent: 'space-between',
        margin: 10,
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 3
    },

    spinner: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    }
})