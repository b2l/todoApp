import { useDispatch, useSelector } from 'react-redux'
import { filterChanged, filters } from './FilterContext'

export function Nav() {
  const filter = useSelector((state: any) => state.filter)
  const dispatch = useDispatch()

  const handleFilterChange = (newFilter: any) => (e: any) => {
    e.preventDefault()
    dispatch(filterChanged(newFilter))
  }

  return (
    <nav className="App-Nav">
      {filters.map((filterDescriptor) => (
        <a
          key={`filter-${filterDescriptor.key}`}
          className={filterDescriptor.key === filter ? 'Link active' : 'Link'}
          onClick={handleFilterChange(filterDescriptor.key)}
          href={`#${filterDescriptor.key}`}
        >
          {filterDescriptor.label}
        </a>
      ))}
    </nav>
  )
}
