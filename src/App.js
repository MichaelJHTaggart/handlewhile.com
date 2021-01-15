import React, { useState } from 'react'
import routes from './routes'
import Header from './components/Header'
import Stopwatch from './components/Stopwatch'


function App() {
  const [user, setUser] = useState({})

  function updateUser(user) {
    setUser(user)
  }

  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
