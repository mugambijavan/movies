import Search from "./components/Search"
import { useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className="pattern" />
      <div className='wrapper'>
        <header>
          <img src='./hero.png' />
          <h1> <span className='text-white'>Finding Movies You Love</span></h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App
