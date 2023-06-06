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
import SoleHome from './Sole Distributor/soleHome/soleHome'
import SoleLogin from './Sole Distributor/soleLogin'
import SoleSignup from './Sole Distributor/soleSignup'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

 import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { productInputs, userInputs } from './Admin/formSource';
import NewProduct from './Admin/new/NewProduct';
import ProductList from './Admin/Components/datatable/ProductList'
import ProductUpdate from './Admin/new/ProductUpdate';
import SoleList from './Admin/Components/datatable/SoleList'
import SoleUpdate from './Admin/new/SoleUpdate';
import Table from './Admin/Components/table/Table'
import SoleProduct from './Sole Distributor/Components/Products/SoleProduct';
import DistributorNew from './Sole Distributor/Components/Distributors/DistributorNew';
import DistributorList from './Sole Distributor/Components/Distributors/DistributorList';
import DistributorUpdate from './Sole Distributor/Components/Distributors/DistributorUpdate';

function App() {
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark":"app"}>
      <Router>
        <Routes>
          {/* Landing Page Routes */}
        <Route exact path='/' element={<Index/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
       

        {/* Admin Components Routes */}
        <Route exact path='/admin/login' element={<AdminLogin />} />
        <Route exact path='/admin' element={<Home/>} />

        <Route exact path='/admin/users'>
            <Route index element={<SoleList/>}/>
            <Route exact path=":id" element={<SoleUpdate/>}/>
            <Route exact path="new" element={<New/>}/>
       </Route>

        <Route exact path='/admin/products'>
            <Route index element={<ProductList/>}/>
            <Route exact path=":id" element={<ProductUpdate/>}/>
            <Route exact path="new" element={<NewProduct />}/>
       </Route>

       <Route exact path='/admin/order' element={<Table/>}></Route>
       
       
       
       <Route exact path='/soleDistributor/products' element={<SoleProduct/>}></Route>
      
       <Route exact path='/soleDistributor/users'>
            <Route index element={<DistributorList/>}/>
            <Route exact path=":id" element={<DistributorUpdate/>}/>
            <Route exact path="new" element={<DistributorNew/>}/>
       </Route>

        {/* Sole Distributors Components Routes */}

        <Route exact path='/soleDistributor' element={<SoleHome/>} />
       <Route exact path='/soleDistributor/register' element={<SoleSignup />} />
        <Route exact path='/soleDistributor/signin' element={<SoleLogin />} />
      
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
