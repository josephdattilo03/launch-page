import './App.css';
import { createRoot } from 'react-dom/client'
import TitleCard from './components/TitleCard/TitleCard';



function App() {

  return (
    <body>
      <div id="title-card"><TitleCard/></div>
    </body>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App;
