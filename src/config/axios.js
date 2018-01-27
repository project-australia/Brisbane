import Config from 'react-native-config'
import Axios from 'axios'
import { wakeUpBackEnd } from '../services/backend/userService'

export const initializeAxios = () => {
  Axios.defaults.baseURL = Config.API_BASE_URL || 'https://project-australia.herokuapp.com/'
  Axios.defaults.headers.post['Content-Type'] = 'application/json'

  wakeUpBackEnd() // TODO: remove this before publish app
}
