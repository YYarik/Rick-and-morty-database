import React from 'react'
import styles from './Search.module.scss'

function Search({setSearch, setPageNumber}) {
  return (
    <form className="d-flex flex-sm-row flex-column alighn-items-center justify-content-center gap-4 my-5">
        <input 
        onChange={(event)=>{
            setPageNumber(1);
            setSearch(event.target.value)}}
            placeholder="Search for characters..." 
            type="text" 
            className={styles.input} />
        <button 
        onClick={(event)=>{
            event.preventDefault();
        }}
        className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search