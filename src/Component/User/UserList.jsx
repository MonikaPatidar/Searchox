import React, { Component } from 'react'; 
import './Script';
import logo from '../../images/profile-user.png'
console.log("user List")
class userList extends Component{
    constructor(props){
        console.log("constructor")
        super(props);
        this.state={
            userList: [],
            searchField:''
        }
    }
state=
{
    search:""
}
    componentDidMount(){
        console.log("componentDidMount")
        var userList = this.state.userList;
        if(localStorage.getItem('userList')){
            userList = JSON.parse(localStorage.getItem('userList'));
        }
        this.setState({
            userList
        })
    }

    deleteData=(index)=>{
        console.log("delete");
       let data= JSON.parse(localStorage.getItem('userList'));
       let userdata=data[index];
        var newStorage = data.filter(function(r) { return r !== userdata});
       localStorage.setItem('userList', JSON.stringify(newStorage))
        this.setState({
            userList: newStorage
        })
        this.props.history.push('/');
    }

    handleEdit(user, index){
        this.props.history.push({pathname:'/user/form/'+index, state:user});
    }

    CreateUser(){
        this.props.history.push('/user/form');
    }

    // searchitem(e){
    //     e.preventDefault();
    //     let searchitem=e.target.value;
    //     console.log(searchitem);
    //     this.setState({
    //         userList: newStorage
    //     })
        
    // }

    render(){
        const {userList, searchField}=this.state;
        console.log(userList);
        const filterUser=userList.filter(Filterdata=>(Filterdata.userList.toLowerCase().includes(searchField.toLowerCase())))
        // console.log("render")
        return(
            <>
            <div class="ui equal width grid">
                <div class="row"></div>
                <div class="row"></div>
            </div>

           
            <div class="ui tablet reversed equal width grid">
                <div class="column"></div>
                <div class="column"></div>
                <div class="column"></div>
                {/* <div class="column"></div> */}
                <div class="column"> 
                </div>
                <div class="column">

                    {/* search Bar start */}
                <div id="searchInput" class="ui category search">
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Search email..." onChange={(e)=>this.setState({searchField:e.target.value})}/>
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
                </div>   
                {/* search Bar end */}

                </div>
                <div class="column">
                {/* <button class="ui positive button" onClick={()=>this.CreateUser()}>Create User</button> */}
                <button class="ui small icon positive right floated left labeled button" onClick={()=>this.CreateUser()}>
                    <i aria-hidden="true" class="user icon"></i>
                     Create User
                </button>
                </div>
                <div class="column"></div>
            </div>

            <div class="ui equal width grid">
                 <div class="row"></div>
            </div>


            <div className="table_div">
           <table class="ui green table">
                <thead class="">
                    <tr class="">
                        <span  class=""> 
                        <th class="">Id</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="">Image</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="">Name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="">Phone</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th class="">Email</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        </span>
                        <th></th>
                        <th></th>
                        <th></th>
                        <span> 
                             <th class="">Action</th>
                        </span>
                    </tr>
                </thead>
                <tbody class="">
                {
                    // (search !== "" && userList.email.indexOf(search)=== -1){
                    //     return null
                    // }

                    this.state.userList.length>0 ? this.state.filterUser.map((user, index)=>{
                            return(    
                    
                    <tr class="" value={user}>
                       <span  onClick={()=>this.handleEdit(user, index+1)}> 
                        <td>{index+1}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src={logo} style={{height:30+'px'} ,{width:30+'px'}}></img></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{user.name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{user.phone}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{user.email}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                       </span>
                       <td></td>
                        <td></td>
                        <td></td>
                        <span>
                            <td>
                            <button class="ui negative button" value={index} onClick={()=>this.deleteData(index)}>Delete</button>  
                            </td>
                        </span>
                    </tr>
                     )
                    }) :
                    <tr>
                        <td colSpan={4}>No Record Found</td>
                    </tr>
                        }
                    </tbody>
                    </table> 
                    </div>


        
        </> 
        )
    }
}
export default userList;






