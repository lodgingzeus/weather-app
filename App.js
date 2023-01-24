import { StyleSheet } from 'react-native';
import Home from './components/Home'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components';
/*
color

orange - #fcba03
blue - #2F52A6
gray - #A5B3C4

*/
export default function App() {
  return (
    <ApplicationProvider {...eva} theme = {eva.dark}>
      <Layout style = {styles.container}>
        <Home />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: '#fcba03',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
