import React, { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/cycles'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        {...register('task')}
        id="task"
        list="task-suggestions"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        {...register('minutesAmount', { valueAsNumber: true })}
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

export default NewCycleForm
