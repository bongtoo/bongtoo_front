import axios from 'axios'
const URL = {
  DEV: 'http://127.0.0.1:8000',
  EB: 'http://bongoto-api-dev.us-west-2.elasticbeanstalk.com'
}
export const BASEURL = URL.EB

export default axios.create({
  baseURL: BASEURL
})