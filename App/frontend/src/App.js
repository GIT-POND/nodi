import './App.css';
import data from '../src/data'

function App() {
  return (
    <div>
      <header>
        <a href="/">nodi-shop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className='itemList'>
        {
          data.products.map(product=>(
            <div className='item' key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div className='itemDesc'>
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>${product.price} USD</p>
              </div>
            </div>
            )
          )
        }
        </div>
      </main>
    </div>
  );
}

export default App;
