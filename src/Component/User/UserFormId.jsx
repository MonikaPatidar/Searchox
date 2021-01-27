import React, { Component } from 'react'; 
console.log("user List ID")
class userList extends Component{

    render(){
        let id=this.props.match.params.id;
        id=id-1;
        // console.log(id);
        var userIdData=JSON.parse(localStorage.getItem('userList'));
        return(
            <>
            
            <table class="ui celled table">
                <thead class="">
                    <tr class="">
                        <th class="">Id</th>
                        <th class="">Name</th>
                        <th class="">Phone</th>
                        <th class="">Email</th>
                    </tr>
                </thead>
                <tbody class="">
                    {userIdData.length <= id ? 
                    <tr>
                        <td colSpan={4}>No Record of {id+1}</td>
                    </tr>
                    : 
                    <tr class="">
                        <td class="">{id+1}</td>
                        <td class="">{userIdData[id].name}</td>
                        <td class="">{userIdData[id].email}</td>
                        <td class="">{userIdData[id].phone}</td>
                    </tr>
                    }
                    </tbody>
                    </table>

        </> 
        )
    }
}
export default userList;






