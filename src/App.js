import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/LoginPass/Login';
import AddItems from './Pages/Shared/AfterLogin/AddItems/AddItems';
import ManageItems from './Pages/Shared/AfterLogin/ManageItems/ManageItems';
import MyItems from './Pages/Shared/AfterLogin/My Items/MyItems';
import Footer from './Pages/Shared/Footer/Footer';
import NavigationBar from './Pages/Shared/Navbar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/manageItems' element={<ManageItems></ManageItems>} />
        <Route path='/addItems' element={<AddItems></AddItems>} />
        <Route path='/myItems' element={<MyItems></MyItems>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
