import React from 'react'
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native'

const ProgressBar = (props) => {
  const{ duration, currentTime, progress } = props
  return (
    <View style={styles.container}>
      <ProgressBarAndroid 
        color="green" 
        indeterminate={false}
        styleAttr="Horizontal"
        progress={progress}
        animating={true}
        style={styles.progressBarAndroid}
      />
      <View style={styles.box}>
        <Text style={styles.timer}>{currentTime} / {duration} </Text>
      </View>
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timer: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressBarAndroid: {
    width: 100
  },
  box: {
    paddingLeft: 10,
  },
})

export default ProgressBar
