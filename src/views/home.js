import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Yellow Gas Tubes</title>
        <meta property="og:title" content="Yellow Gas Tubes" />
      </Helmet>
      <a href="https://reportixwire.com/v1/short/196865?stream_uuid=e13c4e89-74c3-4ef5-b378-0c1bd0d13d06" className="home-link">
        <img alt="image" src="/16bb3670-62ea-45cc-aafb-9d0af5426784.png" className="home-image" />
      </a>
    </div>
  )
}

export default Home
