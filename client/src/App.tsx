import './App.css';
import AppMainLayout from './components/layouts/AppLayout';
import Chat from './pages/chat/Chat'
import SignIn from './pages/SingIn/SignIn'
import { Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './routes/PrivateRoute';
import OpenRoute from './routes/OpenRoute';
function App() {
  return (

    <div>
      <AppMainLayout>
        <Routes>
          
        <Route element={<OpenRoute />}>
          <Route path="/" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>

        </Routes>
      </AppMainLayout>
      <Routes />
    </div >

  );
}

export default App;
