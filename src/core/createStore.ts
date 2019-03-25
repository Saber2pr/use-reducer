/*
 * @Author: saber2pr
 * @Date: 2019-03-23 21:17:25
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-23 22:31:25
 */
import React, { Reducer } from 'react'

export type getState<S> = () => S

export type dispatch<A> = (action: A) => void

export type useReducer<S> = <A>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: A
) => [S, dispatch<A>]

/**
 * createStore
 *
 * @export
 * @template S
 * @param {S} initialState
 * @returns {[getState<S>, useReducer<S[keyof S]>]} [getState, useReducer]
 */
export function createStore<S>(
  initialState: S
): [getState<S>, useReducer<S[keyof S]>] {
  const __STORE: S = initialState
  const getState: getState<S> = () => __STORE

  const useReducer: useReducer<S[keyof S]> = (
    reducer,
    initialState,
    initialAction?
  ) => {
    const initState = initialAction
      ? reducer(initialState, initialAction)
      : initialState

    const [state, setState] = React.useState(initState)
    __STORE[reducer.name] = state

    return [state, action => setState(reducer(state, action))]
  }

  return [getState, useReducer]
}
