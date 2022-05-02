import axios from "axios"

const Api = axios.create({
    baseURL: 'https://kenzie-test.herokuapp.com'
})
export default Api