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
  apiKey: Config.API_KEY || 'AIzaSyD6tp9IzTlBucVCnlMnxEJNeEdE1KQ-lEM',
  authDomain: Config.AUTH_DOMAIN || 'testing-firebase-env.firebaseapp.com',
  databaseURL:
    Config.DATABASE_URL || 'https://testing-firebase-env.firebaseio.com',
  storageBucket: Config.STORAGE_BUCKET || '',
  messagingSenderId: Config.MSG_SENDER_ID || '1088175970844',
  projectId: Config.PROJECT_ID || 'testing-firebase-env'
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
