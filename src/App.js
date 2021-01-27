import React from 'react'
import UserForm from './Component/User/UserForm'
import UserList from './Component/User/UserList';
import UserFormId from './Component/User/UserFormId'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Functional component 
const App = () => { 
  //render single App component 
  return( 
    // <Form /> 
    <Router>
      <Switch>
        <Route exact path="/" component={UserList}/>
        <Route exact path="/user/form" component={UserForm}/>
        <Route path="/user/list" component={UserList}/>
        <Route path="/user/form/id" component={UserForm}/>
      </Switch>
    </Router>
  ) 
} 
  
export default App