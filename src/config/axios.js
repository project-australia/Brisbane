import Config from 'react-native-config'
import Axios from 'axios'

export const initializeAxios = () => {
  Axios.defaults.baseURL = 'http://localhost:3000/' || 'https://project-australia.herokuapp.com/'
  Axios.defaults.headers.post['Content-Type'] = 'application/json'
}
