import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyzooManager from './Containers/MyzooManager/MyzooManager';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <MyzooManager/>
    </BrowserRouter>
  );
}

export default App;
