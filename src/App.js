import React from 'react';
import './App.css';
import Mood from './components/Mood';
import Toggle from './components/Toggle';
import Playing from './components/Playing';

class App extends React.Component {

  
  
  
 
  render() { 
    return (
      <div className="card">
        <div>
          <Mood />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <Playing />
        </div>
      </div>
    );
  }
}
 
export default App;
