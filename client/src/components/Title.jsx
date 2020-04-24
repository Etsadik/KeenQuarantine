import React from 'react';
import styles from '../styles/title.css'

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>
        Welcome: check out grocery runs in your neighborhood
      </h1>
      <div>Going to the store today?  Let your neighbors know!</div>
      <div>Select a time and store:</div>
    </div>
  )
}

export default Title;