import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import BlogDetails from './components/BlogDetails';
import './style.scss';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/blogs/:id' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
