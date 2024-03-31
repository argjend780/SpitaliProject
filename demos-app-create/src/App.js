import './App.css';
import { Navbar , Nav ,Container} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login';
import Regjister from './components/Regjister';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Spitali Amerikan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link } to="/regjister">Regjister</Nav.Link>
            <Nav.Link as={Link } to="/login">Login</Nav.Link>
            <Nav.Link as={Link } to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/regjister' element={<Regjister/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;

