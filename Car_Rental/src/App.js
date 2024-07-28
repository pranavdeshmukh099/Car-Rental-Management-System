import './App.css';
import Header from './components/headerr/Header';
import Home from './components/home/Home'
import About from './components/About/About';
import Cars from './components/Cars/Cars';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Registrationn from './components/login/Registration';
import { Route,Routes } from 'react-router-dom';
import DisplayTablee from './components/login/DisplayTablee';
import Registration from './components/login/Registration';
import Footer from './components/Footer/Footer';
import Updating from './components/login/Updating';
import Admin from './admin_components/Admin';
import CarsPage from './components/Cars/CarsPage'
import HomeAdmin from './admin_components/Home/Home';
import CarDetails from './admin_components/carDetails/CarDetails';
import CarUpdate from './admin_components/carDetails/CarUpdate';
import AdminContact from './admin_components/contactUs/Contact'
import UserDetails from './admin_components/registerUser/UserDetails';
import UserUpdate from './admin_components/registerUser/UserUpdate';
import BookDetails from './admin_components/carBookings/BookDetails';
import CarAdd from './admin_components/carDetails/CarAdd';
import Bookc from './components/Cars/Bookc';
import BookUpdate from './admin_components/carBookings/BookUpdate';

function App() {
  return (
    <>

   
    {/* <Header/>  */}
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Cars' element={<Cars/>} />
        <Route path='/CarsPage' element={<CarsPage/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/BookCar' element={<Bookc/>} />
    


        <Route path='/Admin' element={<Admin/>} />
        <Route path='/CarDetails' element={<CarDetails />} />
        <Route path='/BookDetails' element={<BookDetails/>} />
        <Route path='/UpdateCar' element={<CarUpdate />} />
        <Route path='/findallcontact' element={<AdminContact/>} />
        <Route path='/ViewUsers' element={<UserDetails/>} />
        <Route path='/UserUpdate' element={<UserUpdate/>} />
        <Route path='/CarAdd' element={<CarAdd/>} />
        <Route path='/BookUpdate' element={<BookUpdate/>} />

        
        
    </Routes> 
    {/* <Updating/> */}
    {/* <Registration/> */}
    {/* <DisplayTablee/> */}

    </>
  );
}

export default App;
