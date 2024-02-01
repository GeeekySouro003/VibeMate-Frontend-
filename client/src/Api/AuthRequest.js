import axios from 'axios'

const API =axios.create({baseURL:"http://localhost:8000"})

export const logIn = (FormData) => API.post('auth/login',FormData)
export const signUp = (FormData) => API.post('auth/register',FormData)