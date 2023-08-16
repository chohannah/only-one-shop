import { useState, FormEvent, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: '',
}

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      switch (error) {
        case 'auth/wrong-password':
          alert(
            `Oops! this password doesn't match with the email. 
            Please try another password.`
          )
          break
        case 'auth/user-not-found':
          alert(`Uh-oh, this email doesn't exit.`)
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <article className="log-in-form">
      <h3 className="log-in-form-header">Log In</h3>

      <form className="log-in-form-form" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Button buttonType="filled" buttonSize="md" type="submit">
          log in
        </Button>

        <Link className="link-to-sign-up" to="/sign-up">
          Need a new account?
        </Link>
      </form>

      <div className="log-in-form-divider">
        <span className="text">or</span>
      </div>

      <div className="log-in-form-google">
        <button
          className="log-in-button"
          type="button"
          onClick={signInWithGoogle}
        >
          Continue with Google
        </button>
      </div>
    </article>
  )
}

export default LogInForm
