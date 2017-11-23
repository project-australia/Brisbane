import Firebase from 'firebase'
import Config from 'react-native-config'

const ERROR = {
  duplicatedApp: {
    code: 'app/duplicate-app',
    message: 'Hot reload tried to initiate firebase again. Ignoring duplicated initialization'
  }
}

const firebaseConfig = {
  apiKey: Config.API_KEY,
  authDomain: Config.AUTH_DOMAIN,
  databaseURL: Config.DATABASE_URL,
  storageBucket: Config.STORAGE_BUCKET,
  messagingSenderId: Config.MSG_SENDER_ID,
  projectId: Config.PROJECT_ID
}

export const initialize = () => {
  try {
    return Firebase.initializeApp(firebaseConfig)
  } catch (error) {
    if (error.code === ERROR.duplicatedApp.code) {
      console.info(ERROR.duplicatedApp.message)
    } else {
      throw error
    }
  }
}
