import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import GamePage from './pages/gamepage'
import TrainPage from './pages/training';
import PracticePage from './pages/practice';
import SignupPage from './pages/signupPage';
import { SoundProvider } from './components/SoundContext';
import './App.css';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <SoundProvider>
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn == "true"? <Home /> : <SignupPage />}/>
          <Route path='/game/home' element={<Home />}/>
          <Route path='/game/play/:page' element={<GamePage />}/>
          <Route path='/game/train/:page' element={<TrainPage />}/>
          <Route path='/game/practice/:page' element={<PracticePage />}/>
        </Routes>
     </Router>
     </SoundProvider>
    </div>
  );
}

export default App;
