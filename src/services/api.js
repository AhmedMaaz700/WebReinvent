import axios from "axios"

export const register = async (payload) => {
    try {
     return await axios.post("https://reqres.in/api/register", payload)
   } catch (error) {
     console.log(error)
    }
}

export const loginapi = async (payload) => {
    try {
     return await axios.post("https://reqres.in/api/login", payload)
   } catch (error) {
     console.log(error)
    }
}