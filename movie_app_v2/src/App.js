import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Menu from './components/Menu';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/:id' element={<MovieDetail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
