/* eslint-disable react/jsx-no-undef */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import About from './Pages/About/About';
import ServiceItem from './Pages/Service/ServiceItem';
import Appointment from './Pages/Appointment/Appointment';
import PrivateRouter from './Routes/PrivateRouter';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <PrivateRouter exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRouter>
          <PrivateRouter exact path="/services/:serviceId">
            <ServiceItem></ServiceItem>
          </PrivateRouter>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
