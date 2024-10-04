import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
