import axios from 'axios'

export default async function fetch_user() {
  let {data: {
      user
    }} = await axios.get('/token', {
    headers: {
      auth: localStorage.getItem('auth')
    }
  })
  return user
}