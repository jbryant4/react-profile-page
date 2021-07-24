import React, { useState } from 'react';
import { about, details, projects, contact } from "./profileData"

import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);


function App() {
  const tabs = ['About Me', 'Projects', 'Skills', 'Contact']

  const [currentTab, setCurrentTab] = useState(tabs[0])
  const [currentProject, setCurrentProject] = useState(projects[0])

  const renderPage = () => {
    switch (currentTab) {
      case 'Projects':
        return <Projects
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
        break
      case 'Contact':
        return <Contact />
        break
      case 'Skills':
        return <Skills />
        break
      default:
        return <About
          aboutInfo={about}
        />
    }
  }

  return (
    <>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Nav>
      <main>
        {renderPage()}
      </main>
    </>
  );
}

export default App;
