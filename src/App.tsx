import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'

import './styles/theme.css'
import './styles/global.css'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'

export const App = () => {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRow'>Lorem ipsum dolor sit amet.</div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  )
}
