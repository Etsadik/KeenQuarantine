import React from 'react';
import runs from './dummydata.js'
import styles from '../styles/runListImages.css'

const runList = (props) => {
  return (
    <div> Runs near you:
      {runs.map((run) => {
        return (
          <div>
            {`${run.runnerName} ${run.time} ${run.day} ${run.store}`}
            {<span >
              <img 
                className={styles.runListProfileImage} 
                src={run.picture} 
                altText='image here' 
              />
           </span>
             }
          </div>
        )
      })}
    </div>
  )
}

export default runList; 