import { useState, useEffect } from 'react'

import Bio from '@/components/Bio'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  const [resume, setResume] = useState(null)

  useEffect(() => {
    async function getResume() {

      const resume = await fetch("/resume.json")
      .then(res => res.json())

      setResume(resume)
    }

    getResume()
    
  }, [])

  return (
    <div className="App">
      <div className="container-xl">

        <div className="page">
          <div className="ribbon"><a href="/"><span><small>Back to<br/></small> <FontAwesomeIcon icon={['fab', 'vuejs']}></FontAwesomeIcon> Vue</span></a></div>
          <div className="container-fluid">

              <div className="home">
                  <div className="row">
                      <div className="col-xs-12 col-md-5 col-lg-4 bg-brand p-4">
                          
                          {resume && <Bio resume={resume}></Bio>}
                      </div>
                      <div className="col p-5">
                        { resume &&
                          <>
                          <Experience resume={resume}></Experience>
                          <Skills resume={resume}></Skills>
                          </>
                        }
                      </div>
                  </div>
                  
              </div>

            
          </div>
        </div>

        <div className="built-with">
          <a href="https://github.com/bbickett/bbresume-react">
            Built with <FontAwesomeIcon className="px-1" icon={['fab', 'react']} size="lg"></FontAwesomeIcon> React
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default App
