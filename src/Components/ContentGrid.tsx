import React from 'react'
// import "../styles/App.css";
import 'bootstrap/dist/css/bootstrap.css'
import MainHeadText from './MainHeadText'
import MainContainer from './MainContainer'

function ContentGrid() {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <MainHeadText />
          <MainContainer />
        </div>
      </div>
    </>
  )
}

export default ContentGrid
