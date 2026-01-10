import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'

export const MainForm = () => {
  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault()
    console.log('Criando nova tarefa')
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput labelText='task' id='meuInput' type='text' placeholder='Digite algo' />
      </div>
      <div className='formRow'>Lorem ipsum dolor sit amet.</div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}
