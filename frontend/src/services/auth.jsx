import { useState } from "react";

export default function authServices() {
  const [authLoading, setAuthLoading] = useState(false)
  const url = 'http://localhost:3000/auth'


  const login = (formData) => {
    console.log("Dados enviados:", formData);
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
  console.log("Dados enviados:", formData);
  setAuthLoading(true);
  fetch(`${url}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => { throw err; });
      }
      return response.json();
    })
    .then((result) => {
      alert(result.message || "Cadastro realizado com sucesso!");
    })
    .catch((error) => {
      alert(error.message || "Erro ao cadastrar. Verifique os dados e tente novamente.");
      console.error(error);
    })
    .finally(() => {
      setAuthLoading(false);
    });
};

  return { signup, login, logout, authLoading }
}