import { useState } from "react";

export default function authServices() {
  const [authLoading, setAuthLoading] = useState(false)
  const url = 'http://localhost:3000/auth'


  const login = (formData) => {
    setAuthLoading(true)
    fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setAuthLoading(false)
      })
  }

  const logout = () => {
    // implementar logout aqui
  }

  const signup = (formData) => {
     setAuthLoading(true)
    fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setAuthLoading(false)
      })
  }

  return { signup, login, logout, authLoading }
}
