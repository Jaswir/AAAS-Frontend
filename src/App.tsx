
import { useState } from 'react';
import AutiQuoteCard from './components/AutiQuoteCard';
import CallToAction from './components/CallToAction';



function App() {


  return (

    <>
      <div className="h-screen flex flex-col  justify-center items-center">

        <AutiQuoteCard />
        <CallToAction/>

      </div >

    </>




  )

}

export default App
