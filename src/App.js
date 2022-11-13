import AppRouter from "./router/AppRouter"

import AuthContextProvider from './context/AuthContextProvider';

const App = () => {



  return (
    <>
    
    <AuthContextProvider>
        <AppRouter />
        
      </AuthContextProvider>
    
    </>
  );
}

export default App;
