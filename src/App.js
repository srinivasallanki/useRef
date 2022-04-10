import { useRef } from 'react'

function App() {
  const colorRef = useRef()
  const divRef = useRef()

  const handleColorChange = (e) => {
    e.preventDefault()
    let bgColor = colorRef.current.value
    divRef.current.style.background = bgColor
  }

  return (
    <div className='bodybg' ref={divRef}>
      Changing Bg color with useRef<br></br>
      <form onSubmit={handleColorChange}>
        <input type='color' ref={colorRef} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App
