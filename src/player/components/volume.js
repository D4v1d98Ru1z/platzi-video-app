import React from 'react'
import { TouchableHighlight, Text, StyleSheet } from 'react-native'

const Volume = () => {
  return (
    // TODO: make this button works!
    <TouchableHighlight
      style={styles.container}
      underlayColor="green"
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}
    >
      <Text style={styles.button}>unmute</Text>
    </TouchableHighlight>
  )
}

// Styles
const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  }
})

export default Volume


