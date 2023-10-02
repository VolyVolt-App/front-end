import axios from 'axios'
import { ENDPOINT } from '../services/BaseUrl'

export const axiosClient = axios.create({
    baseURL: ENDPOINT,
})