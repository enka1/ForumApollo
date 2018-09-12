import axios from 'axios'

export default async function fetch_user() {
  let {data} = await axios.get('/user')
  return data.user
}