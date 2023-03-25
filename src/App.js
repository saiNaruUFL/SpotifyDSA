
import React from 'react';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './Main'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </Router>
  )
    
}

export default App;
