import React from 'react'
import {NavigationBar} from '../../src/Components'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (<>
  <style>{`
  .image1{
    background-image: url('https://images.unsplash.com/photo-1519649962620-8e085a22b142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80');
    width: 100vw;
    align-items: center;
  }
  .image2{
    background-image: url('https://images.unsplash.com/photo-1527719197793-6b777854108d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80');
    width: 48vw;
    align-items: end;
    padding-bottom:2em;
  }
    .image3{
    background-image: url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
    width: 48vw;
    align-items: end;
    padding-bottom:2em;
  }

  #image-style{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 500px;

    display: flex;
    justify-content: center;
  }

  .textCont1{
    background-color: #fcb900;
    color: #f44e3b;

    width: 23em;
  }
  .textCont2{
    background-color: #f2f2f2;
    color: #3f3f3f;

    width: fit-content;
  }

  #textCont-style{
    padding: 1rem;
    
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }

  .text1{
    font-size:2em;
  }
  .text2{
    font-size:4em;
    font-weight:bold;
  }
  .text3{
    font-size: larger;
    font-weight:bold;
  }
  .tiles{
    margin-top: 1em;

    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    gap: 1em;
  }
  `}</style>

  <NavigationBar/>
  <Link to='products'>
    <section className='image1' id='image-style'>
      <div className='textCont1' id='textCont-style'>
        <span className='text1'>shop new</span>
        <span className='text2'>arrivals</span>
      </div>
    </section>
  </Link>

  <section className='tiles'>
      <Link to='products'>
    <section className='image2' id='image-style'>
      <div className='textCont2' id='textCont-style'>
        <span className='text3'>shop new</span>
        <span className='text3'>arrivals</span>
      </div>
    </section>
  </Link>
  <Link to='products'>
    <section className='image3' id='image-style'>
      <div className='textCont2' id='textCont-style'>
        <span className='text3'>shop new</span>
        <span className='text3'>arrivals</span>
      </div>
    </section>
  </Link>
  </section>

  </>)
}

export default LandingPage