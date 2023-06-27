import { filters, useFilter, useFilterDispatch } from './FilterContext'

export function Nav() {
  const filter = useFilter()
  const dispatch = useFilterDispatch()

  const handleFilterChange = (newFilter: any) => (e: any) => {
    e.preventDefault()
    dispatch({ type: 'filterChanged', filter: newFilter })
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
