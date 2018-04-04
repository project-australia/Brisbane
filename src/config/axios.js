import Config from 'react-native-config'
import Axios from 'axios'

export const initializeAxios = () => {
  Axios.defaults.baseURL = Config.API_BASE_URL
  Axios.defaults.headers.post['Content-Type'] = 'application/json'
  Axios.defaults.headers.post['Accept'] = 'application/json'
}
