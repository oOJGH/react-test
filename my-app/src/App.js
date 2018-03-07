import React from 'react';
import logo from './logo.svg';
import './App.css';
import CoinFlip from './components/Coinflip';
import CountDown from './components/CountDown';

class App extends React.Component {
    
  render(){
      return(
          <div> 
            <h1>Exercise of CountDown </h1>  
            <CountDown />
            <h1>Exercise of CoinFlip </h1>  
            <CoinFlip />
          </div>          
      );
  }
}

export default App;