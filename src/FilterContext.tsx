import { createContext, useContext, useReducer } from "react";

export const filters = [
  { key: 'completed', label: 'View completed' },
  { key: 'notcompleted', label: 'View not completed' },
  { key: 'all', label: 'View all' },
]


export const FilterContext = createContext('all')
export const FilterDispatchContext = createContext<any>(null)

export function FilterProvider({children}: any) {
  const [filter, dispatch] = useReducer(reducer, 'all')

  return (
    <FilterContext.Provider value={filter}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export function useFilter() {
  return useContext(FilterContext)
}

export function useFilterDispatch() {
  return useContext(FilterDispatchContext)
}

function reducer(filter: any, action: any) {
  switch (action.type) {
    case 'filterChanged': {
      return action.filter
    }
    default: {
      return filter
    }
  }
}
