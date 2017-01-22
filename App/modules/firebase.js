import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDLoKVCsTpcVHcG7QwnX-3ksBuZQRyf9ro",
  authDomain: "feedemote.firebaseapp.com",
  databaseURL: "https://feedemote.firebaseio.com",
  storageBucket: "feedemote.appspot.com",
  messagingSenderId: "13469760655"
}

export default firebase.initializeApp(config)