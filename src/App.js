import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Header from './shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Departments from './pages/Departments/Departments';
import Doctors from './pages/Doctors/Doctors';
import Appointments from './pages/Appointments/Appointments';
import ServicePage from './pages/ServicePage/ServicePage';
import Footer from './shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import DepartmentPage from './pages/DepartmentPage/DepartmentPage';
import Complete from './pages/Complete/Complete';
// import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route path="/home"> <Home></Home> </Route>
          <PrivateRoute path="/services"> <Services></Services> </PrivateRoute>
          <PrivateRoute path="/servicepage/:serviceId"> <ServicePage></ServicePage> </PrivateRoute>
          <PrivateRoute path="/departmentpage/:departmentId"> <DepartmentPage></DepartmentPage> </PrivateRoute>
          <PrivateRoute path="/complete"> <Complete></Complete> </PrivateRoute>
          <Route path="/departments"> <Departments></Departments> </Route>
          <Route path="/doctors"> <Doctors></Doctors> </Route>
          {/* <Route path="/gallery"> <Gallery></Gallery> </Route> */}
          <Route path="/appointments"><Appointments></Appointments></Route>
          <Route > <NotFound></NotFound> </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
