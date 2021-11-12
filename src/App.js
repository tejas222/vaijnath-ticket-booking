import './App.css';
import Navbar from './components/Reusable/Navbar';
import { Provider } from 'react-redux';
import store from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BookTicket from './components/Pages/BookTicket';
import UpdateTicket from './components/Pages/UpdateTicket';
import ViewTicket from './components/Pages/ViewTicket';
import Footer from './components/Reusable/Footer';
import AdminDashboard from './components/Pages/AdminDashboard';
import AfterDeleteMsg from './components/Pages/AfterDeleteMsg';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Admin/Dashboard';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Route exact path='/admin' component={Dashboard} />
          <Route exact path='/' component={BookTicket} />
          <Route exact path='/bookticket' component={BookTicket} />
          <Route exact path='/update/:id' component={UpdateTicket} />
          <Route exact path='/dasbboard' component={AdminDashboard} />
          <Route exact path='/viewticket/:id' component={ViewTicket} />
          <Route path='/usermsg' component={AfterDeleteMsg}></Route>
          <Footer />
        </Router>
      </div>

      <ToastContainer
        autoClose={1500}
        position='top-right'
        hideProgressBar
        theme='colored'
      />
    </>
  );
}

export default App;
