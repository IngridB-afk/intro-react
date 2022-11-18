import  './style/App.scss';

import Home from './components/pages/Home';        
import Join from './components/pages/Join';        
import Discover from './components/pages/Discover';



function App() {
  return (
    <div className="App">
      <Home/>
      <Discover/>
      <Join/>
    </div>
  );
}

export default App;
