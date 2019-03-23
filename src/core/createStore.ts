/*
 * @Author: saber2pr
 * @Date: 2019-03-23 21:17:25
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-23 21:56:07
 */
import React, { Reducer } from 'react'

export type getState<S> = () => S

export type dispatch<A> = (action: A) => void

export type useReducer<S, A> = (
  reducer: Reducer<S, A>,
  initialState: S
) => [S, dispatch<A>]

/**
 * createStore
 *
 * @export
 * @template S
 * @template A
 * @param {S | undefined} initialState
 * @returns {[getState<S>, useReducer<S, A>]} [getState, useReducer]
 */
export function createStore<S, A>(
  initialState?: S | undefined
): [getState<S>, useReducer<S[keyof S], A>] {
  const __STORE: S = initialState
  const getState: getState<S> = () => __STORE

  const useReducer: useReducer<S[keyof S], A> = (reducer, initialState) => {
    const [state, setState] = React.useState(initialState)
    return [
      state,
      action =>
        setState(
          (__STORE[reducer.name] = reducer(state || initialState, action))
        )
    ]
  }

  return [getState, useReducer]
}
