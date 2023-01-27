import './App.css'
import  {useState} from 'react'
import Counter from './components/Counter'


function App() {
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => setIsShow(!isShow)
  
  return (
    <div className="App">
     <button onClick={handleClick}>Show/hide photo</button>
     {
      isShow ?
      <Counter/>
      :
      <h1>Estoy Oculto!</h1>
    }
    </div>
  )
}

export default App
