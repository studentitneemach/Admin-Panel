import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppHeader from "./Deshbord/AppHeader/AppHeader";
import AppSidebar from "./Deshbord/AppSlidebar/AppSidebar";
import AdminTable from "./AdminTable/AdminTable";
import Login from "./LoginPage/Login";
import { UpdateUser } from "./LoginPage/UpdateUser";
import Register from "./LoginPage/Register";
import GetUserById from "./LoginPage/GetUserById";





const Deshbord = () => {
  return (
    <div>
    <AppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AppHeader />
        <div className="body flex-grow-1 px-3">
        <AdminTable />
      </div>
      AppFooter 
    </div>
    </div>
)
}
const App = () => {
  return (
    <BrowserRouter>

    
          <Route exact  path="/" component={Deshbord}  />
          <Route  path="/login" component={Login} />  
      <Route path="/register" component={Register} />  
          <Route path='/updatedata/:id' component={UpdateUser} />
      <Route path='/getuserdata/:id' component={GetUserById} />
    </BrowserRouter>)
}

export default App