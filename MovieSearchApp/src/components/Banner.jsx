import {StyleSheet, Text, View} from 'react-native'

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerText}>OMDB API MOVIE SEARCH</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: 'black',
    flex: 1,
    maxHeight: 100
  },
  bannerText: {
    color: 'white',
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})


export default Banner