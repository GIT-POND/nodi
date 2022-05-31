import React from 'react'
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (<>
    <style>{`
        header{
            background-color: #404040;
            padding: .5rem;
            display: flex;
            align-items: center;
        }
        a{
            text-decoration: none;
            color: #fff;
        }
        li{
          list-style-type: none;
        }
    `}</style>

    <header>
        <a href="/">e-shop</a>
        <ul>
          <li><Link to='products'>Products</Link></li>
        </ul>
    </header>
  </>)
}

export default NavigationBar