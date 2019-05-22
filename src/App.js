import './App.css';
import React from 'react'
import NavBar from './component/NavBar'
import EmailList from './component/EmailList'

function App() {
  return (
    <div>
      <NavBar />
        <div className="row1">
        <EmailList />
        </div>
    </div>
  );
}

export default App;
