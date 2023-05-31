import { ActionTypes, Cycle } from './types'

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptedCurrentCycleAction() {
  return {
    type: ActionTypes.INTERREPT_CURRENT_CYCLE,
  }
}
