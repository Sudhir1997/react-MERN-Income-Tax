import React from "react";
// Here we are importing Request ibrary
import axios from 'axios';
// Importing Sweet Alert 
import Swal from 'sweetalert';
// 
import Lockr from 'lockr';

export default class Login extends React.Component{
  // This is State
  state={email:null,password:null}
// This function is used for storing password in Local storage
  handlerCheckBox(event){
    console.log(event.target.checked)
    if(event.target.checked===true&&!(Lockr.get(this.state.email))){
      Lockr.set(this.state.email,{password:this.state.password})
    }
  }


  // Email is Controlled via this Function
  handlerEmail(event){
    this.setState({email:event.target.value})
  }


  // Password is Controlled via this component
  handlerPassword(event){
    this.setState({password:event.target.value})
  }


  // Handler for OnSubmit 
  handlerOnSubmit(event){
    event.preventDefault();
  }


  async handlerRequest(){
    alert("Sent")
    let res= await axios.post("http://localhost:3000/token",{
        headers:{'Authorization':Lockr.get('token') },
        data: this.state,
             
});
    console.log(res.data.value)
    Lockr.set('token',res.data.value)
  }


  handlerButton(){
    this.handlerRequest.call(this);
    alert(`Your Email is = ${this.state.email},Your Password is ${this.state.password}`)
  }


  handlerPasswordClick(){
    let user=Lockr.get(this.state.email)
    if(user!==undefined){
      console.log(this.state.email)
      this.setState({password:`${user.password}`})
      
    }
  }

  render(){
    return (
  <form onSubmit={this.handlerOnSubmit}>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input  value={this.state.value} onChange={this.handlerEmail.bind(this)} required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onClick={this.handlerPasswordClick.bind(this)} value={this.state.password} onChange={this.handlerPassword.bind(this)} required  type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input onClick={this.handlerCheckBox.bind(this)} type="checkbox" class="form-check-input"  value="1" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Store Password</label>
  </div>
  <button onClick={this.handlerButton.bind(this)} class="btn btn-primary">Submit</button>
</form>
)
  
}

}
// axios({
//   method: 'get',
//   url: 'http://bit.ly/2mTM3nY',
//   responseType: 'stream'
// })
//   .then(function(response) {
//   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
// });