import React from 'react'
import data from '../../src/data'
import {ProdcutContainer} from '../../src/Components'
import {NavigationBar} from '../../src/Components'

function ProductPage() {
  return (<>
    <style>{`
      .productListContainer{
        padding-left: 2em;
        padding-right: 2em; 
      }

      .productList{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    `}</style>

    <NavigationBar />

    <div className='productListContainer'>
      <h1>Featured Products</h1>
      <section className='productList'>
      {
        data.products.map(
          product => (<ProdcutContainer key={product.id} {...product}/>)
        )
      }
      </section>
    </div>

    </>);
}

export default ProductPage;