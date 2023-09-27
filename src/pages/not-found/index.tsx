import Balancer from 'react-wrap-balancer'

import { Container, Row, Column } from '../../components'

import { LogoCircle } from '../../assets/logos'
import { Button } from '../../components'

import {
  StyledNotFound,
  StyledNotFoundImage,
  StyledNotFoundLogo,
  StyledNotFoundTitle,
} from './styles'

const NotFound = () => {
  return (
    <StyledNotFound>
      <Container>
        <Row justifyContent="center">
          <Column sm={4} md={6} lg={4}>
            <StyledNotFoundImage>
              <img
                src="https://i.ibb.co/ZTDwhmC/404.png"
                alt="leter 404"
                aria-hidden
              />
            </StyledNotFoundImage>
          </Column>
        </Row>

        <Row justifyContent="center">
          <Column sm={4} md={10} lg={6}>
            <StyledNotFoundTitle>
              <Balancer>
                We recently launched our new website..
                <br />
                So this link might be broken :)
              </Balancer>
            </StyledNotFoundTitle>
          </Column>
        </Row>

        <Row justifyContent="center">
          <Column sm={4} md={6} lg={4}>
            <Button to="/" variant="filled" size={54}>
              Return to Home
            </Button>

            <StyledNotFoundLogo>
              <LogoCircle />
            </StyledNotFoundLogo>
          </Column>
        </Row>
      </Container>
    </StyledNotFound>
  )
}

export default NotFound
