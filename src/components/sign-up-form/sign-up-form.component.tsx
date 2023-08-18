import { useState, FormEvent, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { AuthError, AuthErrorCodes } from 'firebase/auth'

import { signUpStart } from '../../store/user/user.action'

import FormInput from '../form-input/form-input.component'
import { Button } from '../button'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  const signUpWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("oops! your password don't math. please try again.")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('uh-oh, the email is already exists.')
      } else {
        console.log('email creation encountered error')
      }
      console.log('user creation an encountered error', error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <article className="sign-up-form">
      <h3 className="sign-up-form-header">Create Account</h3>

      <form className="sign-up-form-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button variant="filled" type="submit">
          create
        </Button>

        <Link className="link-to-log-in" to="/log-in">
          Already have an account?
        </Link>
      </form>

      <div className="sign-up-form-divider">
        <span className="text">or</span>
      </div>

      <div className="sign-up-form-google">
        <button className="sign-up-button" onClick={signUpWithGoogle}>
          Continue with Google
        </button>
      </div>
    </article>
  )
}

export default SignUpForm
