import React from 'react';
import './App.css';
import Main from './components/main.js';
import StickyFooter from './components/footer.js';
import ButtonAppBar from './components/topbar.js';
//import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ButtonAppBar />
      </header>
      <Main />
      <footer>
      <StickyFooter />
      </footer>
    </div>
  );
}

export default App;
