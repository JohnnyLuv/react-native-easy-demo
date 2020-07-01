import React, { useState, useEffect } from "react"

import { SafeAreaView, Image, FlatList, StyleSheet, Text, View } from "react-native"

const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json"

const SampleAppMovies = props => {
  const [state, setState] = useState({
    data: [],
    loaded: false
  })

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        setState({
          data: state.data.concat(responseData.movies),
          loaded: true
        })
      })
  }

  function renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    )
  }

  function renderMovie({ item }) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    )
  }


  return (
    <>
      <SafeAreaView>
        {!state.loaded && renderLoadingView()}
        <FlatList data={state.data} renderItem={renderMovie} style={styles.list} keyExtractor={item => item.id} />
      </SafeAreaView>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
})
export default SampleAppMovies