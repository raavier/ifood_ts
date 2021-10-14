import axios from "axios";


const api = axios.create({
    baseURL:"https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"
})

/* api.interceptors.request.use(async (config) => {
    try {
        const token = window.localStorage.getItem('token') !== null ? "" : window.localStorage.getItem('token')
        config.headers.auth = token
    } catch (error) {
        console.error(error)
    }
})
 */
export default api
