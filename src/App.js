import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/Authentication/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import ForgetPassword from './Components/Authentication/ForgetPassword/ForgetPassword';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home/Home';
import ManageItem from './Components/Pages/Home/ManageItem/ManageItem';
import AddItems from './Components/Pages/Home/AddItems/AddItems';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className='relative'>
      <Header ></Header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />


        <Route path="/manage-item/:_id" element={<ManageItem />} />
        <Route path="/add-items" element={<AddItems />} />
        <Route path="/inventory" element={<ManageInventory />} />



        {/* <Route path="/" element={ } /> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
