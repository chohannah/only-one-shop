import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action'

import { useResponsive } from '../../hooks/useResponsive'

import { FormInput, Button } from '../../components'

import {
  StyledLogIn,
  StyledLogInContentGroup,
  StyledLogInContentFooter,
  StyledLogInContentForm,
  StyledLogInContentHeader,
  StyledLogInImage,
} from './styles'
import { ArrowLongRight, GoogleIcon } from '../../assets/icons'
import { LogoCircle } from '../../assets/logos'

const defaultFormFields = {
  email: '',
  password: '',
}

export const LogIn = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const { isMobile } = useResponsive()

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
    <StyledLogIn className={clsx('log-in')}>
      {!isMobile ? (
        <StyledLogInImage>
          <img
            src="https://i.ibb.co/CB9KmJH/log-in.jpg"
            alt="Log In"
            aria-label="A cozy room with audio products in log in page."
          />
        </StyledLogInImage>
      ) : null}

      <StyledLogInContentGroup>
        <StyledLogInContentHeader>
          <span className="header-welcome">Welcom back</span>
          <h3 className="header-title">Log In</h3>

          <button
            className="google-button"
            type="button"
            onClick={signInWithGoogle}
          >
            <GoogleIcon aria-hidden />
            Continue with Google
          </button>

          <LogoCircle className="circle-logo" aria-hidden />
        </StyledLogInContentHeader>

        <StyledLogInContentForm onSubmit={handleSubmit}>
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

          <Button
            className="form-submit-button"
            variant="filled"
            size={54}
            type="submit"
          >
            log in
          </Button>
        </StyledLogInContentForm>

        <StyledLogInContentFooter>
          <p className="footer-title">Need a new account?</p>
          <Button
            className="link-to-sign-up"
            to="/sign-up"
            variant="icon"
            size={isMobile ? '24wide' : '34wide'}
          >
            Sign Up
            <ArrowLongRight />
          </Button>
        </StyledLogInContentFooter>
      </StyledLogInContentGroup>
    </StyledLogIn>
  )
}
