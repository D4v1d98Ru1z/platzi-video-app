import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, Text } from 'react-native'
import Layout from '../components/layout'
import Video from 'react-native-video'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import { formattedTime } from '../../libs/utilities'
import ProgressBar from '../components/progress-bar'
import FullScreen from '../components/fullscreen'

export default class Player extends Component {
  state = {
    loading: true,
    paused: false,
    duration: 0,
    currentTime: 0,
    fullScreen: false,
    progress: 0.0
  }

  /**
   * On buffer event determines if the video stops loading
   * @param {boolean} buffer of the video
   */
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  /**
   * on load event gets if the video is already loaded
   */
  onLoad = () => {
    this.setState({
      loading: false,
    })
  }

  // Change the state of the play and paused button
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }

  // Gets the duration and the current time of the video
  onProgress = e => {
    let currentTime = e.currentTime
    let duration = e.seekableDuration
    this.setState({
      currentTime: formattedTime(currentTime),
      duration: formattedTime(duration),
      progress: (currentTime / duration)
    })
  }

  // Video Ref
  videoRef = element => {
    this.video = element 
  }

  // FullScreen
  onFullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
    
    // Validate if is on fullscreen or not
    this.state.fullScreen ? 
      this.video.dismissFullscreenPlayer()
    :
      this.video.presentFullscreenPlayer()
  }

  render() {
    //ResizeMode allows me to have a full size in the screen for android devices
    return (
      <Layout 
        loading={this.state.loading}
        video={
          <Video 
            source={{
              uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            }}
            style={styles.video}
            resizeMode='contain'
            ref={this.videoRef}
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            onProgress={this.onProgress}
          />
        }
        loader={
          <ActivityIndicator />
        }
        controls={
          <ControlLayout >
            <PlayPause 
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <ProgressBar 
              currentTime={this.state.currentTime}
              duration={this.state.duration}
              progress={this.state.progress}
            />            
            <FullScreen 
              onPress={this.onFullScreen}
              fullScreen={this.state.fullScreen}
            />
          </ControlLayout>
        }
      />
    )
  }
}

// Styles
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})