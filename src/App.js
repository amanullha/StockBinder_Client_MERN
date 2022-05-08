import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home/Home';
import ManageItem from './Components/Pages/Home/ManageItem/ManageItem';
import AddItems from './Components/Pages/Home/AddItems/AddItems';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import MyItems from './Components/Pages/MyItems/MyItems';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import About from './Components/Pages/About/About';
import RequireAuth from './Components/Pages/Authentication/RequireAuth/RequireAuth';
import Login from './Components/Pages/Authentication/Login/Login';
import SignUp from './Components/Pages/Authentication/SignUp/SignUp';
import ForgetPassword from './Components/Pages/Authentication/ForgetPassword/ForgetPassword';
import Loading from './Components/Pages/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Components/Pages/Blogs/Blogs/Blogs';

function App() {
  return (
    <div className='relative'>

      <div className=' z-40 top-1/2 right-0 fixed'>
        <div className='flex flex-col gap-5 mr-2 justify-center items-center'>
          <svg className='cursor-pointer p-0 m-0' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1219.547 1225.016">
            <path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z" /><linearGradient id="a" x1="609.77" x2="609.77" y1="1190.114" y2="21.084" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#20b038" /><stop offset="1" stop-color="#60d66a" /></linearGradient><path fill="url(#a)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z" /><path fill="#FFF" fill-rule="evenodd" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z" clip-rule="evenodd" /><path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z" />
          </svg>

          <svg className='cursor-pointer p-0 m-0' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 48 48">
            <rect width="48" height="48" fill="#419FD9" rx="24" /><rect width="48" height="48" fill="url(#paint0_linear)" rx="24" /><path fill="#fff" d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z" /><defs><linearGradient id="paint0_linear" x1="24" x2="24" y2="47.644" gradientUnits="userSpaceOnUse"><stop stop-color="#2AABEE" /><stop offset="1" stop-color="#229ED9" /></linearGradient></defs>
          </svg>
        </div>
      </div>


      <Header ></Header>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />



        <Route path="/inventory" element={<RequireAuth><ManageInventory /></RequireAuth>} />

        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path="/add-items" element={<RequireAuth><AddItems /></RequireAuth>} />
        <Route path="/manage-item/:_id" element={<RequireAuth><ManageItem /></RequireAuth>} />



        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />



        {/* <Route path="/" element={ } /> */}
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
