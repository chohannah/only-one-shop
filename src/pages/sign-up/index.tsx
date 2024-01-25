import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import clsx from 'clsx'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { signUpStart } from '../../store/user/user.action'
import { useResponsive } from '../../hooks'

import { FormInput, Button } from '../../components'

import { LogoCircle } from '../../assets/logos'
import { GoogleIcon, ArrowLongRight } from '../../assets/icons'

import {
  StyledSignUp,
  StyledSignUpImage,
  StyledSignUpContentGroup,
  StyledSignUpContentHeader,
  StyledSignUpContentForm,
  StyledSignUpContentFooter,
} from './styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { isMobile } = useResponsive()
  const { displayName, email, password, confirmPassword } = formFields

  const signUpWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Oops! your password don't math. Please try again.")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
      alert('New account is successfuly created. Welcome!')
      navigate(-1)
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Uh-oh, this email is already exists. Please try another one.')
      } else {
        console.log('error: email creation ')
      }
      console.log('error: user creation', error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <StyledSignUp className={clsx('sign-up')}>
      {!isMobile ? (
        <StyledSignUpImage>
          <img
            src="https://i.ibb.co/YRcnL6B/sign-up.jpg"
            alt="Sign In"
            aria-label="Braun Tonarmwaage, the original weighing scale (aka Tonarmwaage) used to define the correct counterweight of a record player's tonearm, is lying on a grey floor near a brown paper box."
          />
        </StyledSignUpImage>
      ) : null}

      <StyledSignUpContentGroup>
        <StyledSignUpContentHeader>
          <span className="header-welcome">Welcome</span>
          <h3 className="header-title">Sign Up</h3>

          <button
            className="google-button"
            type="button"
            onClick={signUpWithGoogle}
          >
            <GoogleIcon aria-hidden />
            Continue with Google
          </button>

          <LogoCircle className="circle-logo" aria-hidden />
        </StyledSignUpContentHeader>

        <StyledSignUpContentForm onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            placeholder="How shall we call you?"
          />

          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeholder="example@example.com"
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Enter your password"
          />

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Type the password again"
          />

          <Button
            className="form-submit-button"
            variant="filled"
            size={54}
            type="submit"
          >
            Create a new account
          </Button>
        </StyledSignUpContentForm>

        <StyledSignUpContentFooter>
          <p className="footer-title">Already have an account?</p>

          <Button
            className="link-to-log-in"
            to="/log-in"
            variant="icon"
            size={isMobile ? '24wide' : '34wide'}
          >
            Log In
            <ArrowLongRight />
          </Button>
        </StyledSignUpContentFooter>
      </StyledSignUpContentGroup>
    </StyledSignUp>
  )
}
