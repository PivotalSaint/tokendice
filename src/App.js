import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const title = 'Pivotal Tokens';

  return (
    <div className='App'>
      <Navbar />
      <div className="content">
          <h1>{ title }</h1>
          <Home />

      </div>

    </div>
  );
}

export default App;
