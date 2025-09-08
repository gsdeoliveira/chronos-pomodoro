import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'

export const App = () => {
  return (
    <>
      <Container>
        <Heading>Chronos Pomodoro</Heading>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
      <Container>
        <section>FORM</section>
      </Container>
      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  )
}
