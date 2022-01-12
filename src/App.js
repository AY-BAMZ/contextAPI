import './App.css';
import Nav from './Nav'
import { CartProvider } from './CartContext'
import AddCart from './AddCart';
import Backend from './Api/Backend';
import PostData from './Api/PostData';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from 'react';
import QueryPost from './Api/QueryPost';



function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
    <CartProvider>
      <div className="App">
         <Nav />
         <QueryPost />
        <AddCart />
        <PostData />
        <Backend />
        
      </div>
    </CartProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
}

export default App;
