import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"
import { slowCountItems } from "./utils"

function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }
  
  // React.useEffect(() => {
  //   console.log("productsData changed")
  // }, [productsData])

  const productsCount = React.useMemo(() => {
    return slowCountItems(productsData, 500)
  }, [productsData])
  
  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <h2>There are {productsCount} products</h2>
      <div className="products-list">
        {
          productsData.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);