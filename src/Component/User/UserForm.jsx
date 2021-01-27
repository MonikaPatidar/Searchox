import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    console.log(" form constructor")
    super(props);
    this.state={
      name: '',
      phone: '',
      email: '',
      isParams: false,
      userList:[]
      
    }
  }
  componentDidMount(){
    var params = this.props.match.params;
    if(params.id){
      this.setState({
        isParams: params.id
      })
      var userList = this.state.userList;
      if(localStorage.getItem('userList')){
          userList = JSON.parse(localStorage.getItem('userList'));
      }
      userList.forEach((user, id)=>{
        if(id+1===parseInt(params.id)){
          this.setState({
            name: user.name,
            phone: user.phone,
            email: user.email
          })
        }
      })
      this.setState({
        userList
      })
    }
    console.log("form componentDidMount")
    // var userList = localStorage.getItem('userList');
    // if(userList){
    //   debugger
    // }
  }
  saveUser = (e) => {
    e.preventDefault();
    var userList;
    debugger
    if (!localStorage['userList']) userList = [];
    else userList = JSON.parse(localStorage['userList']); 
      if(!this.state.isParams){
        userList.push({
          name: this.state.name,
          phone: this.state.phone,
          email: this.state.email
        })
      }else{
        userList.forEach((user, id)=>{
          if(id+1===parseInt(this.state.isParams)){
            user.name = this.state.name;
            user.email = this.state.email;
            user.phone = this.state.phone;
          }
        })
      }
      localStorage.setItem('userList',JSON.stringify(userList))
      this.props.history.push('/')
     
  }

  

  render() {
    console.log(" form render")
    console.log(999, this.state)
    return (
      <>
      
      <div class="ui equal width grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row">
          <div class="column">
            <div class="">
            </div>
          </div>

          
          <div class="column">
            <div class="ui segment">
          {/* form start */}
          <div>
            <form class="ui form">
           <h3 class="ui center aligned header">Registration Form</h3>
           {/* <img src={logo}/> */}
          <div class="field">
            <label class="labelColor">First Name</label>
            <input type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={(e)=>this.setState({ name: e.target.value})}/>
          </div>
          <div class="field">
            <label className="labelColor">Phone Number</label>
            <input type='text'
              placeholder='Phone'
              value={this.state.phone}
              onChange={(e)=>this.setState({phone: e.target.value})}/>
          </div>
          <div class="field">
            <label className="labelColor">Email</label>
            <input  type='text'
              placeholder='Email'
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}/>
          </div>
          <div>

          <button type="submit" class="ui primary button" onClick={(e)=>this.saveUser(e)}>Submit</button>
          </div> 
          </form>

          </div>
        {/* form End */}
            </div>
            
          </div>
          
          <div class="column">
            <div class="">
            </div>
          </div>
        </div>
        
    </div>

      </>
    )
        {/* <div class="description"><form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={(e)=>this.setState({ name: e.target.value})}/>
          </div>
          <div class="field">
            <label>Phone Number</label>
            <input type='text'
              placeholder='Phone'
              value={this.state.phone}
              onChange={(e)=>this.setState({phone: e.target.value})}/>
          </div>
          <div class="field">
            <label>Email</label>
            <input  type='text'
              placeholder='Email'
              value={this.state.email}
              onChange={(e)=>this.setState({email: e.target.value})}/>
          </div>
          <button type="submit" class="ui primary button" onClick={(e)=>this.saveUser(e)}>Submit</button>
          </form>
          </div> */}

         
    
  }
} 


