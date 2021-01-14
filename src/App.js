import routes from './routes'
import Header from './components/Header'
import Stopwatch from './components/Stopwatch'

function App() {
  return (
    <div>
      {routes}
      <Header />
      <Stopwatch />
    </div>
  );
}

export default App;
