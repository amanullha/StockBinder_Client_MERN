import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/Authentication/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import ForgetPassword from './Components/Authentication/ForgetPassword/ForgetPassword';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />


        {/* <Route path="/" element={ } /> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
