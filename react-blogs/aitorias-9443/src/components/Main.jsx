import { useState } from 'react'
import './Main.css'
import { Filters } from './Filters/Filters'
import { Card } from './Card/Card'
import filter from '../assets/data/filters.json'
import posts from '../assets/data/posts.json'

export function Main() {

  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <main>
      <div className="wrapper mb-2 px-1 px-md-2 px-lg-32px">
        <div className="content content-border">
          <article className="file">
            <div className="cards-container">
              <Filters
                filterButtons={filter}
                onFilterChange={handleFilterChange}
              />
              <div className="posts">
                <Card
                  posts={posts}
                  activeFilter={activeFilter}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}