import { useState } from 'react'
import './Filters.css'
import { Button } from '../Button/Button'

export function Filters({filterButtons, onFilterChange}) {

  const [activeButton, setActiveButton] = useState('all');

  const handleClick = (button) => {
    setActiveButton(button.id)
    onFilterChange(button.dataFilter)
  }

  return (
    <div className="filters-bar">
      <div className="filters">
          {filterButtons?.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              type="button"
              classes="button filter-button"
              isActive={activeButton === button.id}
              id={button.id}
              value={button.value}
              dataFilter={button.dataFilter}
              disabled={false}
              onClick={() => handleClick(button)}
            />
          ))}
      </div>
    </div>
  )
}