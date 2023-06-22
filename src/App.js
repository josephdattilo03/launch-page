import './App.css';
import { createRoot } from 'react-dom/client'
import TitleCard from './components/TitleCard/TitleCard';
import AttributesLoop from './components/AttributesLoop/AttributesLoop';
import AboutMe from './components/AboutMe/AboutMe';



function App() {

  return (
    <body>
      <section id="title">
        <div id="title-card"><TitleCard/></div>
        <div id="attributes-loop"><AttributesLoop/></div>
      </section>
      <div id="transition1" class="spacer"></div>
      <section id="student">
        <AboutMe/>
      </section>
      <div id="transition2" class="spacer"></div>
      <section id="projects"></section>
    </body>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App;
