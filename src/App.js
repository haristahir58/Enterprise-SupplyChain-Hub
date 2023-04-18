import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import AdminLogin from './Admin/adminLogin';
import Home from './Admin/home/Home';
import List from './Admin/list/List';
import New from './Admin/new/New';
import Single from './Admin/single/Single';
import "./style/dark.scss"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { productInputs, userInputs } from './Admin/formSource';

function App() {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark":"app"}>
      <Router>
        <Routes>
        <Route exact path='/' element={<Index/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/admin/login' element={<AdminLogin />} />
        <Route exact path='/admin' element={<Home/>} />
        
        <Route exact path='/admin/users'>
            <Route index element={<List/>}/>
            <Route exact path=":userId" element={<Single/>}/>
            <Route exact path="new" element={<New inputs = {userInputs} title="Add New Sole Distributor"/>}/>
       </Route>

        <Route exact path='/admin/products'>
            <Route index element={<List/>}/>
            <Route exact path=":productId" element={<Single/>}/>
            <Route exact path="new" element={<New inputs={productInputs} title="Add New Product" />}/>
       </Route>
      
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
