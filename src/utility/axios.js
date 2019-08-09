import axios from 'axios'

export default axios.create({
  baseURL: 'http://ec2-54-180-102-15.ap-northeast-2.compute.amazonaws.com:8000/'
})