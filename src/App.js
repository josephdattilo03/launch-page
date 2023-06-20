import './App.css';
import { createRoot } from 'react-dom/client'
import TitleCard from './components/TitleCard/TitleCard';
import AttributesLoop from './components/AttributesLoop/AttributesLoop';



function App() {

  return (
    <body>
      <section id="title">
        <div id="title-card"><TitleCard/></div>
        <div id="attributes-loop"><AttributesLoop/></div>
      </section>
      <div id="transition1" class="spacer"></div>
      <section id="student">
        <h1>Hi There</h1>
      </section>
    </body>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App;
