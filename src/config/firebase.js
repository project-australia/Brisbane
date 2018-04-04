import Config from 'react-native-config'
import { initializeApp } from 'firebase'

const ERROR = {
  duplicatedApp: {
    code: 'app/duplicate-app',
    message:
      'Hot reload tried to initiate firebase again. Ignoring duplicated initialization'
  }
}

const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MSG_SENDER_ID,
  projectId: Config.FIREBASE_PROJECT_ID
}

export const initializeFirebase = () => {
  try {
    initializeApp(firebaseConfig)
  } catch (error) {
    if (error.code === ERROR.duplicatedApp.code) {
      console.info(ERROR.duplicatedApp.message)
    } else {
      throw error
    }
  }
}
