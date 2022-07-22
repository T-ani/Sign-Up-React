import './App.css';
import Nav from './Componets/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Componets/Footer';
import SignUp from './Componets/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/sign_up" element={<SignUp/>}/>
          <Route path="/log_in" element={<h1>Log In</h1>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
