import { useRef } from 'react';

import VisionCard from './components/VisionCard'
import { Visions } from './data/Visions';

import './App.css'

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: HTMLDivElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="background">
        <img src="https://media.giphy.com/media/26xBAQIxUT8Ys8sRW/giphy.gif?cid=ecf05e47ik91bhura62e99zp3vu0s7h14zh079i6bkh31pl4&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
        <div className="background-overlay" />
      </div>
      <section className='intro-section'>
        <div className='title'>
          <h2>Roman's</h2>
          <h1>2025</h1>
          <h2>VISION BOARD</h2>
        </div>
        <button className='scroll-button' onClick={() => scrollTo(gridRef.current)}>
          <span role="img" aria-label="emoji">
            ⬇️
          </span>
        </button>
      </section>
      <section>
        <div ref={gridRef} className='vision-grid'>
          {Visions.map((vision, index) => (
            <VisionCard
              key={index}
              title={vision.title}
              description={vision.description}
              number={index + 1}
              defaultImageURL={vision.coverImageURL}
              activeImageURL={vision.activeImageURL}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default App