import React, { createContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'

import useCyclesReducer from '../reducers/cycles/reducer'

import {
  addNewCycleAction,
  interruptedCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'

import { Cycle } from '../reducers/cycles/types'

import { writeLocalStorage } from '../../utils/localStorage'
import { setDocumentTitle } from '../../utils/documentTitle'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPasses: number
  markCurrentCycleAsFinished: () => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const { cyclesState, dispatch } = useCyclesReducer()

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPasses, setAmountSecondsPasses] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPasses(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    dispatch(
      addNewCycleAction({
        ...data,
        id: new Date().getTime().toString(),
        startDate: new Date(),
      }),
    )

    setAmountSecondsPasses(0)
  }

  function interruptCurrentCycle() {
    setDocumentTitle('', true)
    dispatch(interruptedCurrentCycleAction())
  }

  useEffect(() => {
    writeLocalStorage('cycles-state', cyclesState)
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPasses,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
