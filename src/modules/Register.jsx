import React from "react";
import axios from "axios";

import {
  FireworkSpinner,
  SequenceSpinner,
  RotateSpinner,
  FlapperSpinner
} from "react-spinners-kit";

import "./../cssmodules/register.css";
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';


import styled, { keyframes } from 'styled-components';
import { bounce,fadeInDown } from 'react-animations';

export default class Register extends React.Component {
  state = { display: null };

  helperDisplay() {
    setTimeout(() => {
      this.setState({ display:true });
    }, 3000);
  }
//Handler Functions 
handlerCountry(event){
  alert(event.target.value);

} 







  componentDidMount() {
    this.helperDisplay.call(this);
  }

  render() {
    
    if (this.state.display === null) {
      return (
        <Fade>
        <div id="main">
          <RotateSpinner size={90} color={"#123abc"} />
        </div>
        </Fade>
      );
    } else if(this.state.display===true) {
      return (
        <>
       <Fade bottom>
        <h2 id="heading">Register Form</h2>


        <form>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Enter First Name"
              required
              name="firstName"
            />
          </div>
 
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Enter Last Name"
              required
              name="lastName"
            />
          </div>
 
          <div class="form-row">
 
            <div class="form-group col-md-4">
              <label for="email">Email</label>
              <input type="email" placeholder="Enter Email" class="form-control" id="email" name="email"  required/>
            </div>
 
            <div class="form-group col-md-4">
              <label for="password">Password</label>
              <input type="password" placeholder="Enter Password" class="form-control" id="password" name="password" required />
            </div>
 
             <div class="form-group col-md-4">
              <label for="confirmPasssword">Confirm Password</label>
              <input type="password"  placeholder="Confirm Password" class="form-control" id="confirmPassword" required />
            </div>
              
          </div>


          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>

          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-3">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>

          <div class="form-group col-md-4">
              <label for="inputState">Country</label>
              <select onChange={this.handlerCountry} id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>India</option>
                <option>Japan</option>
                <option>China</option>
              </select>
            </div>

            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

          </div>

           <label class="radio-inline">
            <input type="radio" name="optradio" value="Male"/>Male
            </label>
            <label class="radio-inline">
           <input id="female" type="radio" name="optradio" value="Female"/>Female
            </label>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
         <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
        </form>
       </Fade>
        </>
      );
    }
    else if(this.state.display===23){
      const bounceAnimation = keyframes`${fadeInDown}`;
    const BouncyDiv = styled.div`
  animation: 10s ${bounceAnimation};
`;
    return <Fade top> <h1> Hello World </h1></Fade>
    }
  }
}
