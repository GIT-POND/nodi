import React from 'react'

function NavigationBar() {
  return (<>
    <style>{`
        header{
            background-color: #404040;
            padding: 1rem;
        }
        header a{
            text-decoration: none;
            color: #fff;
            font-size:x-large;
        }
    `}</style>

    <header>
        <a href="/">e-shop</a>
    </header>
  </>)
}

export default NavigationBar