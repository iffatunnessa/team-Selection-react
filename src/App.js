import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cricketer from './components/cricketer/Cricketer';
import Header from './components/Header/Header';

function App() {
 
  return(
    <div>
      <Header></Header>
      <Cricketer></Cricketer>
    </div>
  );
}

export default App;
