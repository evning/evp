import React from 'react';
import Layout from "../components/layout"
import Card from ".../components/card"
import /*cardGroup from*/ "../components/index.css"
import { Link } from "gatsby"

const Index = () => {
  return(
    <Layout>
      <div className="Cards">
        <h2>How can we help</h2>
        <div className="cardGroup">
          <div className="cardOne">
            <Link to ="/services">
            <Card 
              title="Web Design"
              text="Sub Title"
           />
           </Link>
          </div>
         <div className="cardTwo">
         <Link to ="/services">
         <Card 
         title="Custom Photography"
         text="Location or Studio"/>
         </Link>
         </div>
         <div className="cardThree">
         <Link to ="/services">
         <Card 
         title="Ideas and Recommendations"
         text="Let us build up your web presence"/>
         </Link>
         </div> 
         </div>
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