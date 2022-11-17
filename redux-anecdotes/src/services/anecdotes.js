import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (newObject) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  const response = await request.then(response => response.data)
  return response
}

export default {
  getAll,
  createNew,
  update
}