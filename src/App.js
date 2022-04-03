import LoginForm from './components/LoginForm';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './Chat';

const projectID = '536059cc-bbd9-4ffe-8713-ad202efeb12f';

const App = () => {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={(localStorage.getItem('username') === null ) ? <LoginForm /> : <Chat />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

// infinite scroll, logout, more customizations...
export default App;
