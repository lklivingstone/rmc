import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Bachelor from "./pages/Bachelor/Bachelor";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Study from "./pages/Study/Study";

import { useSelector } from 'react-redux';
import { selectUser } from './redux/userRedux';
import Admin from "./pages/Admin/Admin";



function App() {
  const user= useSelector(selectUser)
  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" exact element={<Home />}/>
          <Route path="/login" element= {user ? <Navigate to="/admin" replace /> :  <Login />} />
          <Route path="/admin" element= {user===null ? <Navigate to="/login" replace /> :  <Admin />} />
          <Route path="/bachelor" exact element={<Bachelor />}/>
          <Route path="/bachelor/:search" exact element={<Bachelor />}/>
          <Route path="/studies/:id" exact element={<Study />}/>
          <Route path="/login" exact element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
