import React from 'react'
import { 
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

const PlayPause = (props) => {
  const {
    onPress,
    paused
  } = props

  /**
   * Touchable components
   * hitSlop property creates a touchable radius around the button
   */
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="green"
      hitSlop={{
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      }}
    >
      {
        paused ? 
        <Text style={styles.button}>PLAY</Text> 
        : 
        <Text style={styles.button}>PAUSE</Text>
      }
      
      
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

export default PlayPause
