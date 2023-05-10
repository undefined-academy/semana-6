import { useState } from 'react'
import './Filters.css'
import { Button } from '../Button/Button'

export function Filters({filterButtons}) {

  const [activeButton, setActiveButton] = useState('all');

  const handleClick = (button) => {
    setActiveButton(button);
  }

  return (
    <div className="filters-bar">
      <div className="filters">
          {filterButtons?.map((button) => (
            <Button
              key={button.id}
              type={button.type}
              classes={button.classes}
              id={button.id}
              value={button.value}
              dataFilter={button.dataFilter}
              text={button.text}
              isActive={activeButton === button.id}
              onClick={() => handleClick(button.dataFilter)}
            />
          ))}
      </div>
    </div>
  )
}