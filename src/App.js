import React, { useState } from 'react';
import { about, projects, contact, skills } from "./profileData"
import { makeStyles } from '@material-ui/styles';

import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const useStyles = makeStyles({
  main: {
    position:'relative',
    top: 53,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  
  }
});


function App() {
  const tabs = ['About Me', 'Projects', 'Skills', 'Contact']

  const [currentTab, setCurrentTab] = useState(tabs[0])
  const [currentProject, setCurrentProject] = useState(projects[0])

  const classes = useStyles();

  const renderPage = () => {
    switch (currentTab) {
      case 'Projects':
        return <Projects
          projects={projects}
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
        />
        
      case 'Contact':
        return <Contact />
        
      case 'Skills':
        return <Skills
          skills={skills}
        />
        
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
      />
      <main className={classes.main}>
      
          {renderPage()}
        
      </main>
      <Footer
        contact={contact}
      />
    </>
  );
}

export default App;
