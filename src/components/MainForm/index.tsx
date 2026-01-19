import { PlayCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { useRef } from 'react'
import type { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export const MainForm = () => {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCyleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault()

    if (!taskNameInput.current) return

    const taskName = taskNameInput.current.value.trim()
    if (!taskName) {
      alert('Digite o nome da tarefa.')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCyleType],
      type: nextCyleType,
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, // Conferir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask], 
      }
    })
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput labelText='task' id='meuInput' type='text' placeholder='Digite algo' ref={taskNameInput} />
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
