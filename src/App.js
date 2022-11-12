import Navbar from './conponents/Navbar';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import AppRouter from "./router/AppRouter"

import AuthContextProvider from './context/AuthContextProvider';

function App() {



  return (
    <>
    <AuthContextProvider>
            <AppRouter/>
    </AuthContextProvider>
    </>
  );
}

export default App;
