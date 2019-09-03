import axios from 'axios'
const URL = {
  DEV: 'http://127.0.0.1:8000',
  PRODUCT: 'https://pure-meadow-81014.herokuapp.com'
}
export const BASEURL = URL.PRODUCT

export default axios.create({
  baseURL: BASEURL
})