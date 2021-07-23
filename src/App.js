import React, {useState} from 'react';
import { about, details, projects, contact } from "./profileData"
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  const tabs = ['About me', 'Projects', 'Contact']

  const [currentTab, setCurrentTab] = useState(tabs[0])

  const renderPage = () => {
    switch (currentTab) {
      case 'Projects':
        return <Projects />
        break
      case 'Contact':
        return <Contact />
        break
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Nav>
      <section>
        {renderPage()}
      </section>
    </div>
  );
}

export default App;
