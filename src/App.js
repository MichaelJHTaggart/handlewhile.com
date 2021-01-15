import routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
