import React, { createContext, useReducer } from 'react'


interface IState {
  episodes: [],
  favourites: []
}

interface IAction {
  type: string,
  payload: any
}

const initialState: IState = {
  episodes: [],
  favourites: []
};


export const Store = createContext<IState | any>(initialState)


const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        episodes: action.payload
      }
    case 'ADD_FAV':
      return {
        ...state,
        favourites: action.payload
      }
    default:
      return state;
  }
};


const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}

export default StoreProvider
