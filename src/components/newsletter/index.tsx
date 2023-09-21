import { ChangeEvent, FormEvent, useState } from 'react'
import { Balancer } from 'react-wrap-balancer'

import { useResponsive } from '../../hooks/useResponsive'
import { Button } from '../button'

import {
  StyledNewsletter,
  StyledNewsletterForm,
  StyledNewsletterFormInput,
  StyledNewsletterImage,
  StyledNewsletterLeft,
  StyledNewsletterTitle,
} from './styles'
import { ArrowLongRight } from '../../assets/icons'

export const Newsletter = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [status, setStatus] = useState<string | null>(null)

  const { isTablet, isDesktop } = useResponsive()

  const FORM_URL = 'form url'

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // server example from here
    const data = new FormData(e.target as HTMLFormElement)

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          acept: 'application/json',
        },
      })
      const json = await response.json()

      if (json.status === 'success') {
        // setStatus('SUCCESS')
        return
      }
    } catch (error) {
      // setStatus('ERROR')
      console.log(error)
    }
    // server example until here

    console.log(`Subscribed with email: ${email}`)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <StyledNewsletter>
      {/* {status === null ( */}

      <StyledNewsletterLeft>
        <StyledNewsletterTitle>
          <Balancer>
            Sign up for our newsletter to receive special offers, news and great
            events.
          </Balancer>
        </StyledNewsletterTitle>

        <StyledNewsletterForm
          onSubmit={handleNewsletterSubmit}
          // action=''
        >
          <StyledNewsletterFormInput>
            <span className="newsletter-input-circle" />
            <input
              className="newsletter-input"
              type="text"
              name="fields[first_name]"
              placeholder="How shall we call you?"
              value={name}
              onChange={handleNameChange}
              required
            />
          </StyledNewsletterFormInput>

          <StyledNewsletterFormInput>
            <span className="newsletter-input-circle" />
            <input
              className="newsletter-input"
              type="email"
              name="email"
              placeholder="example@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </StyledNewsletterFormInput>

          {isDesktop ? (
            <Button type="submit" variant="icon" size="34wide">
              Sign up
              <ArrowLongRight />
            </Button>
          ) : (
            <Button type="submit" variant="icon" size="24wide">
              Sign up
              <ArrowLongRight />
            </Button>
          )}
        </StyledNewsletterForm>
      </StyledNewsletterLeft>

      {isTablet ? (
        <StyledNewsletterImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/global/newsletter.jpg`}
            alt="Newsletter thumbnail"
            aria-label="Braun TP1(an audio proudct of Braun) designed by Dieter Rams image"
          />
        </StyledNewsletterImage>
      ) : null}

      {isDesktop ? (
        <StyledNewsletterImage>
          <img
            src={`${process.env.PUBLIC_URL}/images/global/newsletter.jpg`}
            alt="Newsletter thumbnail"
            aria-label="Braun TP1 designed by Dieter Rams image"
          />
        </StyledNewsletterImage>
      ) : null}

      {/* )} */}
      {/* {status === "SUCCESS" ( 
        <h3>Welcom!</h3>
       )} */}
      {/* {status === "ERROR" ( 
       <p>Please <button onClick={() => setStatus(null)}>try again.</button> </p>
       )} */}
    </StyledNewsletter>
  )
}
