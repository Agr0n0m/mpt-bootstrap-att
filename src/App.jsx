
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import React from 'react';


export const AppContext = React.createContext({})

function App() {

  //state для хранения данных туров
  const [prod, setProd] = useState([])
  

  useEffect(() => {
    async function axiosData(){
      const prodData = await axios.get('https://6525301d67cfb1e59ce6d5ca.mockapi.io/prod')
      
      setProd(prodData.data)
      
    }
    axiosData();
}, [])

  return (
    <AppContext.Provider value={{prod}}>
      <div>
        <Router>
          <Header/>
          <Routes>
            
            <Route path='/' element={<Home item={prod}/>}/>

          </Routes>
        </Router>
        <Footer/>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
