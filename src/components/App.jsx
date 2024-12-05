import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Product from './Product';
import { Alert } from './Alert.jsx';
// import css from "./Alert.module.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
        <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning"  outlined elevated>
        Please update your profile contact information
      </Alert>
    </div>
    
    </>
  )
}


// const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

export default App
