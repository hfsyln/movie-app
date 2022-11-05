import Navbar from './conponents/Navbar';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import AppRouter from "./router/AppRouter"
import { BrowserRouter} from 'react-router-dom';

function App() {



  return (

    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
