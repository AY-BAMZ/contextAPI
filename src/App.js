import './App.css';
import Nav from './Nav'
import { CartProvider } from './CartContext'
import AddCart from './AddCart';
import Backend from './Api/Backend';
import PostData from './Api/PostData';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <AddCart />
        <PostData />
        <Backend />

      </div>
    </CartProvider>
  );
}

export default App;
