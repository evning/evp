import React from 'react';
import Layout from "../components/layout"
import Card from ".../components/card"

const Index = () => {

  return(
    <Layout>
      <div className="Cards">
        <h2>How can we help</h2>
        <Card 
          title="Web Design"
          text="Sub Title"/>
          <Card 
          title="Custom Photography"
          text="Location or Studio"/>
          <Card 
          title="Ideas and Recommendations"
          text="Let us build up your web presence "/>
      </div>
    </Layout>
  )
}

export default Index




/*
import React from 'react';
import "../components/index.css"
import { navigate } from "gatsby"
import { Link } from 'gatsby';

import React from 'react';
import { Link } from "gatsby"
import "../components/index.css"


const Index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
        <h1>Jeff C. Salter</h1>
        <p>Cybersecurity and Information Design</p>
        <button className='heroButton' onClick={()=>{navigate("/about'")}}>How We Can Help</button>
      </div>
    </div>
  </header>
  );
}

export default Index
*/