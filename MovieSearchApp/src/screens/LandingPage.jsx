import {useState} from 'react'
import {Text, View} from 'react-native'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Results from '../components/Results'

const apiUrl = 'http://www.omdbapi.com/?apikey=2c0bcb9f&t='


const LandingScreen = () => {
  const [movieResult, setMovieResult] = useState()

  const handleSearch = async (searchString) => {
    // console.log(searchString)
    const result = await fetch(`http://www.omdbapi.com/?t=${searchString}&apikey=2c0bcb9f`).then((data) => data.json())
    // console.log(result)
    setMovieResult(result)
  }


  return (
    <View style={{flex: 1}}>
      <Banner />
      <SearchField onSubmit={handleSearch}/>
      {movieResult?.Title &&
        <Results movie={movieResult} />
      }
    </View>
  )
}

export default LandingScreen