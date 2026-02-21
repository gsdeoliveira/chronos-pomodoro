import type { TaskModel } from '../../models/TaskModel'

// 1. Defina as ações como um objeto constante (POJO)
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const

// 2. Crie um tipo baseado nos valores desse objeto
export type TaskActionTypes = (typeof TaskActionTypes)[keyof typeof TaskActionTypes]

// O restante do seu código permanece quase igual:
export type TaskActionsWithPayload =
  | {
      type: typeof TaskActionTypes.START_TASK
      payload: TaskModel
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK
      payload: TaskModel
    }

export type TaskActionsWithoutPayload = {
  type: typeof TaskActionTypes.RESET_STATE
}

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload
