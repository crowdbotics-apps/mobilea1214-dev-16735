import axios from "axios"
const registration = axios.create({
  baseURL: "https://tstcr2020100801-dev-12946.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function registration_post_restauth_registration_create(action) {
  return registration.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
export const apiService = { registration_post_restauth_registration_create }
