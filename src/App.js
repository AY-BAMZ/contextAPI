import './App.css';
import Nav from './Nav'
import { CartProvider } from './CartContext'
import AddCart from './AddCart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <AddCart />
      </div>
    </CartProvider>
  );
}

export default App;
