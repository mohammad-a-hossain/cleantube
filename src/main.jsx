import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StoreProvider } from 'easy-peasy';
import store from './Easy-Peasy/Store/store';



ReactDOM.createRoot(document.getElementById('root')).render(
 

  <StoreProvider store={store}> 
 
    <App />
   </StoreProvider>
  
)
