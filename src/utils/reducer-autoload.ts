import dissoc from 'ramda/es/dissoc';
import mapObjIndexed from 'ramda/es/mapObjIndexed';
import mergeDeepRight from 'ramda/es/mergeDeepRight';
import { Reducer } from 'react';
import { AnyAction } from 'redux';

export const ReducerAutoload = (ReducerPool, initialState) => (state = initialState, action) => {
  if (ReducerPool[action.type]) {
    return ReducerPool[action.type](state, action);
  } else {
    return state;
  }
};

type AnyReducer = Reducer<any, any>;
type ReducerGroup = {
  root: AnyReducer;
  [key: string]: AnyReducer;
};

export const AdvanceCombineReducers = (reducerGroup: ReducerGroup, initialState) => (
  state = initialState,
  action: AnyAction,
) =>
  mergeDeepRight(state)(
    mergeDeepRight(
      reducerGroup.root(state, action),
      mapObjIndexed(
        (reducer: AnyReducer, key) => reducer(state[key], action),
        dissoc('root', reducerGroup),
      ),
    ),
  );
