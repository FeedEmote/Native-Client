import React, { Component, TouchableOpacity } from 'react'
import { View, Text } from 'react-native'

import Camera from 'react-native-camera'

// File Upload
const FileUpload = require('NativeModules').FileUpload

const server = 'http://142.150.208.170'
let interval = null

export default class Recording extends Component {
  constructor(props) {
    super(props)
    this.state = {
      running: false,
      uid: 'NHHePgE5P4MTRUjcY8EmeNXvoys1',
      pr_id: ''
    }
  }

  _takePicture() {
    this.camera.capture()
      .then((image) => {

        let request = {
          uploadUrl: `${server}/upload/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          fields: {
            'userid': this.state.uid,
            'pr_id': this.state.pr_id
          },
          files: [
            {
              filename: 'IMG.jpg',
              filepath: image.path
            }
          ]
        }

        FileUpload.upload(request, (err, result) => console.log('upload:', err, result))

      })
  }

  _startButton() {
    return (
      <View style={[styles.startCapture, styles.captureButton]}>

        <Text
          style={styles.startCaptureText}
          onPress={() => {
            this.setState({ running: true })

            interval = setInterval(() => this._takePicture(), 5000)

            fetch(`${server}/addpr?userid=${this.state.uid}`)
              .then((response) => response.json())
              .then((response) => this.setState({ pr_id: responseJSON.pr_key }))
              .catch((error) => console.log(error))
          }
        }>
          START
        </Text>

      </View>
    )
  }

  _stopButton() {
    return (
      <View style={[styles.stopCapture, styles.captureButton]}>
        <Text
          onPress={() => {
            fetch(`${server}/endpr?userid=${this.state.uid}`)
            this.setState({ running: false })
            clearInterval(interval)
          }
        }>
          STOP
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.container, styles.camera]}>

        <Camera
          ref={(camera) => this.camera = camera}
          captureQuality={Camera.constants.CaptureQuality.high}
          captureTarget={Camera.constants.CaptureTarget.temp}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill} >

          {
            this.state.running
              ? this._stopButton()
              : this._startButton()
          }

        </Camera>

      </View>
    )
  }
}