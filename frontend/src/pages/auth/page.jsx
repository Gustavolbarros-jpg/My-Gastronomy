import { useState } from "react"
import { TextField, Button } from "@mui/material"
import styles from './page.module.css' // <== CORRIGIDO AQUI
import authServices from "../../services/auth"


export default function Auth() {
  const [formType, setFormType] = useState('login')
  const [formData, setFormData] = useState(null)
  const {login,signup} = authServices()

  const handleChargeFormType = () => {
    setFormData(null)
    setFormType(formType === 'login' ? 'signup' : 'login')

  }
  const handleFormsDataChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

const handleSubmitForm=(e) =>{
    e.preventDefault()

    switch(formType){
     case 'login':
      login(formData)
        break
     case 'signup':
        if(formData.password !==  formData.confirmPassword){
                    console.log("Passwords do not match")
                    return
                }
                signup(formData)

      break

   }
    
}

  if (formType === 'login') {
    return (
      
        <div className={styles.authPageContainer}>
          <h1>Login</h1>
          <button onClick={handleChargeFormType}>
            Don't you have an account? Click Here
          </button>
          <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={handleFormsDataChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              onChange={handleFormsDataChange}
            />
            <Button type="submit">Login</Button>
          </form>
        </div>
      
    )
  }

  if (formType === 'signup') {
    return (
      <div  >
        <h1>Signup</h1>
        <button onClick={handleChargeFormType}>Already have an account? Click Here
        </button>
        <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Fullname"
              type="fullname"
              name="fullname"
              onChange={handleFormsDataChange}
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={handleFormsDataChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              onChange={handleFormsDataChange}
            />
            <TextField
              required
              label=" Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleFormsDataChange}
            />
            <Button type="submit">Login</Button>
          </form>
      </div>
    )
  }
}
