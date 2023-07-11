import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import LoginForm from './Admin/pages/loginform';
import Dashboard from './Admin/pages/Dashboard';

function App() {
  return (
<>
 <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path='/employeelogin' element={<LoginForm/>}/>
    <Route exact path='/dashboard' element={<Dashboard/>}/>
 </Routes>

</>
  );
}

export default App;
