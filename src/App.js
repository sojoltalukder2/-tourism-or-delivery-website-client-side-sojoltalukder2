import './App.css';
import Home from './Component/Home/Home';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import ManageOrder from './Component/ManageOrder/ManageOrder';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import Admin from './Component/Admin/Admin';
import Footer from './Component/Footer/Footer';
import None from './Component/None/None';
import Order from './Component/PlaceOrder/Order';
import PrivateRoute from './Component/Private/PrivateRoute';
import AuthProvider from './Component/Home/Context/AuthProvider';
import AllOrder from './Component/AllOrder/AllOrder';
function App() {
  return (
    <div className="App">
    <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
     <Home></Home>
     </Route>
     <Route  path="/home">
     <Home></Home>
     </Route>
     <PrivateRoute path="/myorders">
     <ManageOrder></ManageOrder>
     </PrivateRoute>
     <PrivateRoute  path="/allorders">
     <AllOrder></AllOrder>
     </PrivateRoute>
     < PrivateRoute  path="/admin">
    <Admin></Admin>
     </PrivateRoute>
     <Route  path="/login">
     <Login></Login>
     </Route>
     <PrivateRoute  path="/order/:orderId">
     <Order> </Order>
     </PrivateRoute>
     <Route  path="*">
     <None></None>
     </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
