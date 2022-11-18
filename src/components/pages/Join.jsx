import React from 'react';
import Menu from '../molecules/Menu';
import Boxsub from '../atoms/Boxsub';
import Footer from '../molecules/Footer';

const Join = () => {
  return (
    <div>
      <Menu/>
        <section className="join">
        <h1>Join the <span>fun.</span></h1>
        <Boxsub />
        </section>
      <Footer/>
    </div>
  )
}

export default Join;