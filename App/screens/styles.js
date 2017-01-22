import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
  camera: {
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInButton: {
    width: 300,
    height: 50,
    margin: 10
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startCapture: {
    backgroundColor: 'white'
  },
  stopCapture: {
    backgroundColor: '#EE7766',
  },
  captureText: {
    padding: 9
  }
})